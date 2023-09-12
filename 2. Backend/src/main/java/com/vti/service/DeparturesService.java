package com.vti.service;
import com.vti.entity.Departures;
import com.vti.form.DeparturesFormForCreateOrUpdating;
import com.vti.repository.IDeparturesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeparturesService implements IDeparturesService {
    @Autowired
    private IDeparturesRepository repository;

    @Override
    public List<Departures> getAllDepartures (){
        return repository.findAll();
    }

    @Override
    public Departures getDeparturesById ( int id ) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Departures findByName ( String name ){
        return repository.findByName(name);
    }

    @Override
    public Departures createOrUpdateDepartures ( DeparturesFormForCreateOrUpdating form ){
        return repository.save(form.toDepartures());
    }
    @Override
    public void deleteDepartures ( int id ){
        repository.deleteById(id);
    }
}
