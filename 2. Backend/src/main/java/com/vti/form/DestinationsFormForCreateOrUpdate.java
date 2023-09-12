package com.vti.form;

import com.vti.entity.Destinations;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DestinationsFormForCreateOrUpdate {
    private int id;
    private String name;
    private Destinations.Status status;
    public Destinations toDestinations(){
        Destinations destinations = new Destinations(name,status);
        destinations.setId(id);
        return destinations;
    }
}
