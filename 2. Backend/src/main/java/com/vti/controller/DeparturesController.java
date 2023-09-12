package com.vti.controller;

import com.vti.dto.DeparturesDTO;
import com.vti.entity.Departures;
import com.vti.form.DeparturesFormForCreateOrUpdating;
import com.vti.service.IDeparturesService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("api/v1/departures")
public class DeparturesController {


    @Autowired
    private IDeparturesService service;

    @Autowired
    private ModelMapper mapper;

    @GetMapping
    public ResponseEntity<?> getAllDepartures () {
        List<Departures> entities = service.getAllDepartures();
        List<DeparturesDTO> dtos = mapper.map(entities, new TypeToken<List<DeparturesDTO>>() {}.getType());
    return new ResponseEntity<>(dtos,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public DeparturesDTO getDeparturesById ( @PathVariable("id") int id ) {
        Departures departures = service.getDeparturesById(id);
        return mapper.map(departures, DeparturesDTO.class);
    }

    @PostMapping
    public ResponseEntity<?> createDepartures ( @RequestBody DeparturesFormForCreateOrUpdating form ) {
        service.createOrUpdateDepartures(form);
        return new ResponseEntity<String>("Create successfully!", HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> updateDepartures ( @RequestBody DeparturesFormForCreateOrUpdating form ) {
        service.createOrUpdateDepartures(form);
        return new ResponseEntity<String>("Update successfully!", HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteDeparturesById ( @PathVariable("id") int id ) {
        service.deleteDepartures(id);
        return new ResponseEntity<String>("Delete successfully!", HttpStatus.OK);
    }


}

