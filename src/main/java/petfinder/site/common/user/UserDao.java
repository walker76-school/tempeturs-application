package petfinder.site.common.user;

import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;
import alloy.util.Tuple;
import org.json.JSONObject;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.URL;
import java.nio.charset.Charset;

import org.json.JSONException;

import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Repository;

import petfinder.site.common.appointment.*;
import petfinder.site.elasticsearch.UserElasticSearchRepository;

/**
 * Created by jlutteringer on 8/23/17.
 */
@Repository
public class UserDao {
	//is what stores the DTO
	@Autowired
	private UserElasticSearchRepository repository;

	@Autowired
	private AppointmentService appointmentService;

	public Optional<UserAuthenticationDto> findUserByPrincipal(String principal) {
		SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();

		String queryString = String.format("user.principal=\"%s\"", principal.replace("\"", ""));
		searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));

		return repository.search(searchSourceBuilder).stream().findFirst();
	}

	public List<UserDto> findSuggestedSitters(String zip) {
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();

        String queryString = "user.type=\"SITTER\"";
        searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));

        return repository.search(searchSourceBuilder).stream()
                .map(UserAuthenticationDto::getUser)
                .filter(user -> user.getZip().equals(zip))
                .collect(Collectors.toList());
    }

    public List<Sitter> findSitters(SitterRequest request){
		String principal = SecurityContextHolder.getContext().getAuthentication().getName();

		SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
		searchSourceBuilder.query(QueryBuilders.matchAllQuery());
		List<UserDto> ourReturn = repository.search(searchSourceBuilder).stream()
				.map(UserAuthenticationDto::getUser)
				.filter(user -> user.getType().equals(UserDto.UserType.SITTER) || user.getType().equals(UserDto.UserType.COMBO))
				.filter(user -> !user.getPrincipal().equals(principal))
				.collect(Collectors.toList());

		List<Pair<Pair<Double, String>, UserDto>> pairs = new ArrayList<>();

		for(UserDto e : ourReturn) {

			String googleRequest = "https://maps.googleapis.com/maps/api/directions/json?origin=" + request.getAddressLine() + "%20" + request.getCity()
					+ "%20" + request.getState() + "%20" + request.getZip() + "&destination=" + e.getAddressLine() + "%20" + e.getCity() + "%20" + e.getState()
					+ "%20" + e.getZip() + "&key=AIzaSyDolgtw08Z4fjTc82xfYQufGBoeWWSXve0";
			googleRequest = googleRequest.replaceAll(" ", "%20");

			double distance = Double.POSITIVE_INFINITY;
			String text = "";
			try {
				JSONObject json = readJsonFromUrl(googleRequest);
				System.out.println(json.toString());
				text = json.getJSONArray("routes").getJSONObject(0).getJSONArray("legs").getJSONObject(0).getJSONObject("duration").get("text").toString();
				String distanceRaw = json.getJSONArray("routes").getJSONObject(0).getJSONArray("legs").getJSONObject(0).getJSONObject("duration").get("value").toString();
				String[] split = distanceRaw.split(" ");
				distance = Double.parseDouble(split[0]);
			} catch (Exception ex) {
				System.out.println(ex.toString());
			}

			boolean isAllowed = true;
			for (Long date = removeTime(request.getStartDate()); date <= removeTime(request.getEndDate()); date += 86400000){
				Date d = new Date(date);
				SimpleDateFormat simpleDateformat = new SimpleDateFormat("EEEE");
				String day = simpleDateformat.format(d);
				System.out.println(day);

				boolean dayAvailability = false;
				switch(day){
					case "Sunday":
						dayAvailability = e.getAvailability().isSundayMorning() || e.getAvailability().isSundayMidday() || e.getAvailability().isSundayAfternoon() || e.getAvailability().isSundayEvening();
						break;
					case "Monday":
						dayAvailability = e.getAvailability().isMondayMorning() || e.getAvailability().isMondayMidday() || e.getAvailability().isMondayAfternoon() || e.getAvailability().isMondayEvening();
						break;
					case "Tuesday":
						dayAvailability = e.getAvailability().isTuesdayMorning() || e.getAvailability().isTuesdayMidday() || e.getAvailability().isTuesdayAfternoon() || e.getAvailability().isTuesdayEvening();
						break;
					case "Wednesday":
						dayAvailability = e.getAvailability().isWednesdayMorning() || e.getAvailability().isWednesdayMidday() || e.getAvailability().isWednesdayAfternoon() || e.getAvailability().isWednesdayEvening();
						break;
					case "Thursday":
						dayAvailability = e.getAvailability().isThursdayMorning() || e.getAvailability().isThursdayMidday() || e.getAvailability().isThursdayAfternoon() || e.getAvailability().isThursdayEvening();
						break;
					case "Friday":
						dayAvailability = e.getAvailability().isFridayMorning() || e.getAvailability().isFridayMidday() || e.getAvailability().isFridayAfternoon() || e.getAvailability().isFridayEvening();
						break;
					case "Saturday":
						dayAvailability = e.getAvailability().isSaturdayMorning() || e.getAvailability().isSaturdayMidday() || e.getAvailability().isSaturdayAfternoon() || e.getAvailability().isSaturdayEvening();
						break;
					default: break;
				}
				if(!dayAvailability){
					isAllowed = false;
				}
			}

			if(isAllowed) {
				pairs.add(new Pair<Pair<Double, String>, UserDto>(new Pair<>(distance, text), e));
			}
		}

		pairs.sort(new Comparator<Pair<Pair<Double, String>, UserDto>>() {
			@Override
			public int compare(Pair<Pair<Double, String>, UserDto> o1, Pair<Pair<Double, String>, UserDto> o2) {
				return (int)(o1.getFirst().getFirst()  - o2.getFirst().getFirst());
			}
		});

		for(int i = pairs.size()-1; i > 5; i--){
			pairs.remove(i);
        }

		return pairs.stream()
				.map(pair -> {
					return new Sitter(pair.getSecond(), findRating(pair.getSecond().getPrincipal()), pair.getFirst().getSecond());
				})
				.collect(Collectors.toList());
	}

	private Long removeTime(Long time) {
		Date date = new Date(time);
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.set(Calendar.HOUR_OF_DAY, 0);
		cal.set(Calendar.MINUTE, 0);
		cal.set(Calendar.SECOND, 0);
		cal.set(Calendar.MILLISECOND, 0);
		return cal.getTime().getTime();
	}

	public Integer findRating(String principal){
		int total = 0;
		int sum = 0;
		Optional<UserAuthenticationDto> userDtoOptional = findUserByPrincipal(principal);
		if(userDtoOptional.isPresent()){
			UserAuthenticationDto userADto = userDtoOptional.get();
			UserDto userDto = userADto.getUser();
			for(Long appointmentId : userDto.getAppointments()){
				Optional<AppointmentDto> appointmentDtoOptional = appointmentService.findAppointment(appointmentId);
				if(appointmentDtoOptional.isPresent()){
					AppointmentDto appointmentDto = appointmentDtoOptional.get();
					if(appointmentDto.getRating() != -1 && principal.equals(appointmentDto.getSitter())){
						sum += appointmentDto.getRating();
						total++;
					}
				}
			}
		}

		return total != 0 ? (sum / total) : -1;
	}

	private static String readAll(Reader rd) throws IOException {
		StringBuilder sb = new StringBuilder();
		int cp;
		while ((cp = rd.read()) != -1) {
			sb.append((char) cp);
		}
		return sb.toString();
	}

	public static JSONObject readJsonFromUrl(String url) throws IOException, JSONException {
		InputStream is = new URL(url).openStream();
		try {
			BufferedReader rd = new BufferedReader(new InputStreamReader(is, Charset.forName("UTF-8")));
			String jsonText = readAll(rd);
			return new JSONObject(jsonText);
		} finally {
			is.close();
		}
	}

    public void makeAppointment(String owner, String sitter, Long id) {
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();

        String queryString = String.format("user.principal=\"%s\"", owner.replace("\"", ""));
        searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));

        Optional<UserAuthenticationDto> ownerADto = repository.search(searchSourceBuilder).stream().findFirst();
        UserDto ownerDto = ownerADto.get().getUser();

        queryString = String.format("user.principal=\"%s\"", sitter.replace("\"", ""));
        searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));

        Optional<UserAuthenticationDto> sitterADto = repository.search(searchSourceBuilder).stream().findFirst();
        UserDto sitterDto = sitterADto.get().getUser();

        // Add the appointmentDto
		ownerDto.getAppointments().add(id);
		sitterDto.getAppointments().add(id);
		sitterDto.getNotifications().add("You have a new pending appointment with user: " + ownerDto.getPrincipal());

		save(ownerADto.get());
		save(sitterADto.get());
    }

	public void save(UserAuthenticationDto userAuthentication) {
		repository.save(userAuthentication);
	}

	public enum AppointmentType {
		PENDING, ACCEPTED, REJECTED, CANCELLED
	}
}