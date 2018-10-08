package petfinder.site.common.availability;

import alloy.elasticsearch.ElasticSearchClientProvider;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import petfinder.site.common.pet.PetDto;
import petfinder.site.elasticsearch.AvailabilityElasticSearchRepository;

import java.util.Optional;

/**
 * Created by awalker on 10/6/2018.
 */
@Repository
public class AvailabilityDao {

    @Autowired
    private AvailabilityElasticSearchRepository availabilityElasticSearchRepository;

    public Optional<AvailabilityDto> findAvailability(String principal) {
        return availabilityElasticSearchRepository.find(principal);
    }

    public Optional<AvailabilityDto> findAvailabilityByPrincipal(String principal) {
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();

        String queryString = String.format("principal=\"%s\"", principal.replace("\"", ""));
        searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));

        return availabilityElasticSearchRepository.search(searchSourceBuilder).stream().findFirst();
    }

    public void save(AvailabilityDto availability) {
        availabilityElasticSearchRepository.save(availability);
    }
}