package com.vti.controller;

import com.vti.dto.DestinationsDTO;
import com.vti.form.DestinationsFormForCreateOrUpdate;
import com.vti.service.IDestinationsService;
import com.vti.entity.Destinations;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/Destinations")

public class DestinationsController {
    @Autowired
    private ModelMapper mapper;
    @Autowired
    private IDestinationsService service;

    @GetMapping
    public ResponseEntity<?> getAllDestinations (  ) {
        List<Destinations> entities = service.getAllDestinations();
        List<DestinationsDTO> dtos = mapper.map(entities, new TypeToken<List<DestinationsDTO>>() {
        }.getType());
        return new ResponseEntity<>(dtos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public DestinationsDTO getDestinationsById ( @PathVariable("id") int id ) {
        Destinations destinations = service.getDestinationsById(id);
        return mapper.map(destinations, DestinationsDTO.class);
    }


    @PostMapping
    public ResponseEntity<?> createDestinations ( @RequestBody DestinationsFormForCreateOrUpdate form ) {
        service.createOrUpdateDestinations(form);
        return new ResponseEntity<String>("Create successfully!", HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> updateDestinations (@RequestBody DestinationsFormForCreateOrUpdate form ) {
        service.createOrUpdateDestinations(form);
        return new ResponseEntity<String>("Update successfully!", HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteDestinations ( @PathVariable("id") int id ) {
        service.deleteDestinations(id);
        return new ResponseEntity<String>("Delete successfully!", HttpStatus.OK);
    }

}
