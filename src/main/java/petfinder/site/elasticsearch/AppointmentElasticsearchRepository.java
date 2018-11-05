package petfinder.site.elasticsearch;

import org.springframework.stereotype.Service;

import alloy.elasticsearch.ElasticSearchClientProvider;
import alloy.elasticsearch.ElasticSearchIndex;
import alloy.elasticsearch.ElasticSearchRepository.ElasticSearchJsonRepository;
import petfinder.site.common.appointment.AppointmentDto;
import petfinder.site.common.pet.PetDto;
import petfinder.site.common.user.UserAuthenticationDto;

/**
 * Created by jlutteringer on 2/7/18.
 */
@Service
public class AppointmentElasticsearchRepository extends ElasticSearchJsonRepository<AppointmentDto, Long> {
    public AppointmentElasticsearchRepository(ElasticSearchClientProvider provider) {
        super(new ElasticSearchIndex(provider, "petfinder-appointment"), AppointmentDto.class);
    }
}