package com.vti.controller;
import com.vti.dto.BookingsDTO;
import com.vti.entity.Bookings;
import com.vti.form.BookingsFilterForm;
import com.vti.form.BookingsFormForCreatingOrUpdate;

import com.vti.service.IBookingsService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/Bookings")
public class BookingsController {
    @Autowired
    private ModelMapper mapper;
    @Autowired
    private IBookingsService service;
    @GetMapping
    public ResponseEntity<?> getAllBookings ( Pageable pageable, BookingsFilterForm form ) {
        Page<Bookings> entities = service.getAllBookings(pageable,form);
        List<BookingsDTO> dtos = mapper.map(entities.getContent(), new TypeToken<List<BookingsDTO>>() {}.getType());
        Page<BookingsDTO> dtoPage = new PageImpl<>(dtos,pageable,entities.getTotalElements());
        return new ResponseEntity<>(dtoPage, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public BookingsDTO getBookingById ( @PathVariable("id") int id ) {
        Bookings booking = service.getBookingById(id);
        return mapper.map(booking, BookingsDTO.class);
    }


    @PostMapping
    public ResponseEntity<?> createBooking ( @RequestBody BookingsFormForCreatingOrUpdate form ) {
        service.createOrUpdateBooking(form);
        return new ResponseEntity<String>("Create successfully!", HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> updateBooking (@RequestBody BookingsFormForCreatingOrUpdate form ) {
        service.createOrUpdateBooking(form);
        return new ResponseEntity<String>("Update successfully!", HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBooking ( @PathVariable("id") int id ) {
        service.deleteBooking(id);
        return new ResponseEntity<String>("Delete successfully!", HttpStatus.OK);
    }
    @DeleteMapping()
    public ResponseEntity<?> deleteManyBookings(@RequestParam(name = "idDeleteList") List<Integer> idDeleteList) {
        return new ResponseEntity<>(service.deleteManyBookings(idDeleteList), HttpStatus.OK);
    }

}
