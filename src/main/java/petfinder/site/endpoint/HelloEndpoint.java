package petfinder.site.endpoint;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/hello")
public class HelloEndpoint {

    @GetMapping(value="/")
    public String getGreeting(){
        return "Hello from Group 3";
    }
}
