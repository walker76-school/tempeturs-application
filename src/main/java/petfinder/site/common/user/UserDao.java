package petfinder.site.common.user;

import java.util.*;
import java.util.stream.Collectors;

import com.sun.tools.javac.util.Pair;
//import org.json.simple.JSONObject;
import org.json.JSONArray;
import org.json.JSONObject;

import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import petfinder.site.common.appointment.AppointmentDto;
import petfinder.site.elasticsearch.UserElasticSearchRepository;

/**
 * Created by jlutteringer on 8/23/17.
 */
@Repository
public class UserDao {
	//is what stores the DTO
	@Autowired
	private UserElasticSearchRepository repository;

	// JOHN
	public Optional<UserAuthenticationDto> findUser(String id) {
//		return repository.find(id, UserAuthenticationDto.class);
		return null;
	}

	public Optional<UserAuthenticationDto> findUserByPrincipal(String principal) {
		SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();

		String queryString = String.format("user.principal=\"%s\"", principal.replace("\"", ""));
		searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));

		return repository.search(searchSourceBuilder).stream().findFirst();
	}

	public List<UserDto> findSitters(String zip) {
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();

        String queryString = "user.type=\"SITTER\"";
        searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));

        return repository.search(searchSourceBuilder).stream()
                .map(UserAuthenticationDto::getUser)
                .filter(user -> user.getZip().equals(zip))
                .collect(Collectors.toList());
    }

    public List<UserDto> findSitters(String addressLine, String city, String state, String zip){
		// the passed in information belongs to the owner that were trying to match a sitter with.
		// were going to pull all the sitters in the same state
		// if you live in a different state but close by too bad so sad
		SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();

		String queryString = "user.type=\"SITTER\"";
		searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));

		List<UserDto> ourReturn;

		// idk if i can directly assign this complex object to the return of this statement.
		ourReturn =  repository.search(searchSourceBuilder).stream()
				.map(UserAuthenticationDto::getUser)
				.filter(user -> user.getZip().equals(state))
				.collect(Collectors.toList());

		// used pair from import com.sun.tools.javac.util.Pair;
		List< Pair<UserDto,String >> DriveTimePairs = null;

		// now that we have all sitters in the same state we need to get the drive times
		String durationValue = "";
		for(UserDto e : ourReturn){
			//we need to make the http request and store the  value in "duration" : {
			//                  "text" : "1 hour 48 mins",
			//                  "value" : 6505
			//               }
			String request = "https://maps.googleapis.com/maps/api/directions/json?origin="+addressLine+"%20"+city
					+"%20"+state+"%20"+zip+"&destination="+e.getAddressLine()+"%20"+e.getCity() +"%20"+e.getState()
					+"%20"+e.getZip()+"&key=AIzaSyDolgtw08Z4fjTc82xfYQufGBoeWWSXve0";
			// I don't know how to do the actual request and parse only for the value we want.


		}

		// sort the list
		DriveTimePairs.sort(new Comparator<Pair<UserDto, String>>() {
			@Override
			public int compare(Pair<UserDto, String> o1, Pair<UserDto, String> o2) {
				// switch logic if you get the worst drive times.
				return Integer.parseInt(o1.snd)  - Integer.parseInt(o2.snd);
				}
		});
		// now we need to refine the list maybe return top 5 drive times or something

		for(int i = DriveTimePairs.size()-1; i > 5; i--){
			// we need to truncate back end of the list
			DriveTimePairs.remove(i);
		}

		// now we should return drive time pairs to display instead of ourReturn.
		return ourReturn;
	}

	// code borrowed from user Niranj Patel stack overflow.

//	public List<List<HashMap<String,String>>> parse(JSONObject jObject){
//
//		List<List<HashMap<String, String>>> routes = new ArrayList<List<HashMap<String,String>>>() ;
//		JSONArray jRoutes = null;
//		JSONArray jLegs = null;
//		JSONArray jSteps = null;
//
//		try {
//
//			jRoutes = jObject.getJSONArray("routes");
//
//			/** Traversing all routes */
//			for(int i=0;i<jRoutes.length();i++){
//				// we changed the cast from JSONArray to JSONObject
//				jLegs = ( (JSONObject)jRoutes.get(i)).getJSONArray("legs");
//
//				List path = new ArrayList<HashMap<String, String>>();
//
//				/** Traversing all legs */
//				for(int j=0;j<jLegs.length();j++){
//					// same here
//					jSteps = ( (JSONObject)jLegs.get(j)).getJSONArray("steps");
//
//					/** Traversing all steps */
//					for(int k=0;k<jSteps.length();k++){
//
//						String html_instructions = jSteps.get(k).getString("html_instructions");
//						String travel_mode = jSteps.get(k).getString("travel_mode");
//						String maneuver = jSteps.get(k).getString("maneuver");
//
//						String distance_text = jSteps.get(k).getJSONObject("distance").getString("text");
//						String distance_value = jSteps.get(k).getJSONObject("distance").getString("value");
//
//						String duration_text = jSteps.get(k).getJSONObject("duration").getString("text");
//						String duration_value = jSteps.get(k).getJSONObject("duration").getString("value");
//
//						String start_lat = jSteps.get(k).getJSONObject("start_location").getString("lat");
//						String start_lon = jSteps.get(k).getJSONObject("start_location").getString("lng");
//
//						String end_lat = jSteps.get(k).getJSONObject("end_location").getString("lat");
//						String end_lon = jSteps.get(k).getJSONObject("end_location").getString("lng");
//
//						String polyline = "";
//						polyline = (String)((JSONObject)((JSONObject)jSteps.get(k)).get("polyline")).get("points");
//						List<LatLng> list = decodePoly(polyline);
//
//
//						/** Traversing all points */
//						for(int l=0;l<list.size();l++){
//							HashMap<String, String> hm = new HashMap<String, String>();
//							hm.put("lat", Double.toString(((LatLng)list.get(l)).latitude) );
//							hm.put("lng", Double.toString(((LatLng)list.get(l)).longitude) );
//							path.add(hm);
//						}
//					}
//					routes.add(path);
//				}
//			}
//
//		} catch (JSONException e) {
//			e.printStackTrace();
//		}catch (Exception e){
//		}
//
//
//		return routes;
//	}

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
		PENDING, ACCEPTED, REJECTED
	}
}