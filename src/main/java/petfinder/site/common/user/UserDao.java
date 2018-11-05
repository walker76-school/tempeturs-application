package petfinder.site.common.user;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.builder.SearchSourceBuilder;
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
		sitterDto.getNotifications().add("You have a new pending appointmentDto with user: " + ownerDto.getPrincipal());

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