package com.vti.service;

import com.vti.entity.Bookings;

import com.vti.form.BookingsFilterForm;
import com.vti.form.BookingsFormForCreatingOrUpdate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IBookingsService {
    Page<Bookings> getAllBookings( Pageable pageable, BookingsFilterForm form );

    Bookings getBookingById ( int id );

//    Bookings findByName ( String name );

    Bookings createOrUpdateBooking ( BookingsFormForCreatingOrUpdate form );

//    Bookings updateBooking ( int id, BookingsFormForUpdating form );

    void deleteBooking ( int id );
    int deleteManyBookings( List<Integer> idDeleteList);
}
