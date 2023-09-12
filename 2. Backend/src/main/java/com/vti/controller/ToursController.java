package com.vti.controller;

import com.vti.dto.ToursDTO;
import com.vti.form.*;
import com.vti.service.IToursService;
import com.vti.entity.Tours;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/Tours")

public class ToursController {
    @Autowired
    private ModelMapper mapper;
    @Autowired
    private IToursService service;

    @GetMapping
    @PreAuthorize("hasAnyAuthority('ADMIN')")
    public ResponseEntity<?> getAllTours ( Pageable pageable,  ToursFilterForm form ) {
        Page<Tours> entities = service.getAllTours(pageable,form);
        List<ToursDTO> dtos = mapper.map(entities.getContent(), new TypeToken<List<ToursDTO>>() {}.getType());
        Page<ToursDTO> dtoPage = new PageImpl<>(dtos,pageable,entities.getTotalElements());
        return new ResponseEntity<>(dtoPage, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ToursDTO getTourById ( @PathVariable("id") int id ) {
        Tours tour = service.getTourById(id);
        return mapper.map(tour, ToursDTO.class);
    }


    @PostMapping
    public ResponseEntity<?> createTour ( @RequestBody ToursFormForCreateOrUpdating form ) {
        service.createOrUpdateTour(form);
        return new ResponseEntity<String>("Create successfully!", HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> updateTour (@RequestBody ToursFormForCreateOrUpdating form ) {
        service.createOrUpdateTour(form);
        return new ResponseEntity<String>("Update successfully!", HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTour ( @PathVariable("id") int id ) {
        service.deleteTour(id);
        return new ResponseEntity<String>("Delete successfully!", HttpStatus.OK);
    }

    @DeleteMapping()
    public ResponseEntity<?> deleteManyTour(@RequestParam(name = "idDeleteList") List<Integer> idDeleteList) {

        return new ResponseEntity<>(service.deleteManyTour(idDeleteList), HttpStatus.OK);
    }

}
