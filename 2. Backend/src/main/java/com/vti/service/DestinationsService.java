package com.vti.service;

import com.vti.entity.Destinations;
import com.vti.form.DestinationsFormForCreateOrUpdate;
import com.vti.repository.IDestinationsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DestinationsService implements IDestinationsService {
    @Autowired
    private IDestinationsRepository repository;

    @Override
    public List<Destinations> getAllDestinations () {
        return repository.findAll();
    }

    @Override
    public Destinations getDestinationsById ( int id ) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Destinations findByName ( String name ) {
        return repository.findByName(name);
    }



    @Override
    public Destinations createOrUpdateDestinations (DestinationsFormForCreateOrUpdate form ) {
        return repository.save(form.toDestinations());
    }

    @Override
    public void deleteDestinations ( int id ) {
        repository.deleteById(id);

    }
}
