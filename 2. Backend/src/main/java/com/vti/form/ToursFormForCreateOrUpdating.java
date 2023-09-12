package com.vti.form;

import com.vti.entity.Departures;
import com.vti.entity.Destinations;
import com.vti.entity.Tours;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ToursFormForCreateOrUpdating {
    private int id;
    private String name;
    private String imageUrl;
    private Double ratting;
    private Double discount;
    private Date arrival;
    private Date leaving;
    private String description;
    private Double price;
    private Tours.Status status;
    private int departuresId;
    private int destinationsId;

    public Tours toTours(){
        Departures departures = new Departures(departuresId);
        Destinations destinations = new Destinations(departuresId);
        Tours tours = new Tours(name, imageUrl, ratting, discount, arrival, leaving, description, price, status, departures, destinations);
        tours.setId(id);
        return tours;
    }
}
