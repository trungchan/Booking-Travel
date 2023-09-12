package com.vti.service;

import com.vti.entity.Destinations;
import com.vti.form.DestinationsFormForCreateOrUpdate;

import java.util.List;


public interface IDestinationsService {
    List<Destinations> getAllDestinations ();

    Destinations getDestinationsById ( int id );

    Destinations findByName ( String name );


    Destinations createOrUpdateDestinations (DestinationsFormForCreateOrUpdate form );

    void deleteDestinations ( int id );
}
