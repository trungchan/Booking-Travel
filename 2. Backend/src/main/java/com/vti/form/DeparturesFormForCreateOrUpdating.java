package com.vti.form;


import com.vti.entity.Departures;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DeparturesFormForCreateOrUpdating {

    private  int id;
    private String name;
    public Departures toDepartures(){
        Departures departures = new Departures(name);
        departures.setId(id);
        return departures;

    }
}
