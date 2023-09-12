package com.vti.form;

import com.vti.entity.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingsFormForCreatingOrUpdate {


    private int id;
    private int guest;

    private int status;

    private Date bookingDate;

    private int userId;

    private int toursId;


    public Bookings toBookings(Tours tours, User user){
        Bookings bookings = new Bookings(guest,status, bookingDate, user, tours);
        bookings.setId(id);
        return bookings;

    }


}
