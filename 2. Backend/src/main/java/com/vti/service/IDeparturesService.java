package com.vti.service;

import com.vti.entity.Departures;
import com.vti.form.DeparturesFormForCreateOrUpdating;

import java.util.List;

public interface IDeparturesService {
    List<Departures> getAllDepartures ();

    Departures getDeparturesById ( int id );

    Departures findByName ( String name );

    Departures createOrUpdateDepartures ( DeparturesFormForCreateOrUpdating form );

    void deleteDepartures ( int id );
}
