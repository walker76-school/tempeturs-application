package petfinder.site.elasticsearch;

import alloy.elasticsearch.ElasticSearchClientProvider;
import alloy.elasticsearch.ElasticSearchIndex;
import org.springframework.stereotype.Service;
import petfinder.site.common.availability.AvailabilityDto;
import alloy.elasticsearch.ElasticSearchRepository.ElasticSearchJsonRepository;

@Service
public class AvailabilityElasticSearchRepository extends ElasticSearchJsonRepository<AvailabilityDto, String> {

    public AvailabilityElasticSearchRepository(ElasticSearchClientProvider provider) {
        super(new ElasticSearchIndex(provider, "petfinder-availability"), AvailabilityDto.class);
    }

}
