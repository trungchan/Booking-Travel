package com.vti.service;

import com.vti.entity.Bookings;
import com.vti.entity.Tours;
import com.vti.entity.User;
import com.vti.form.BookingsFilterForm;
import com.vti.form.BookingsFormForCreatingOrUpdate;
import com.vti.repository.IBookingsRepository;
import com.vti.repository.IToursRepository;
import com.vti.repository.IUserRepository;
import com.vti.specification.BookingSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class BookingsService implements IBookingsService {
    @Autowired
    private IBookingsRepository repository;

    @Autowired
    private IToursRepository toursRepository;

    @Autowired
    private IUserRepository userRepository;

    @Override
    public Page<Bookings> getAllBookings ( Pageable pageable, BookingsFilterForm form ) {
        return repository.findAll(BookingSpecification.buildWhere(form), pageable);
    }

    @Override
    public Bookings getBookingById ( int id ) {
        return repository.findById(id).orElse(null);
    }

//    @Override
//    public Bookings findByName ( String name ) {
//        return repository.findByName(name);
//    }

    @Override
    public Bookings createOrUpdateBooking ( BookingsFormForCreatingOrUpdate form ) {
        Tours tours = toursRepository.findById(form.getToursId()).get();
        User user = userRepository.findById(form.getUserId()).get();
        return repository.save(form.toBookings(tours, user));
    }

//    @Override
//    public Bookings updateBooking ( int id, BookingsFormForUpdating form ) {
//        return repository.save(form.toBookings(id));
//    }

    @Override
    public void deleteBooking ( int id ) {
        repository.deleteById(id);
    }

    @Override
    public int deleteManyBookings ( List<Integer> idDeleteList ) {
        return repository.deleteManyBookings(idDeleteList);
    }
}
