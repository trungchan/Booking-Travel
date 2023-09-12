package com.vti.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.vti.entity.Bookings;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginDTO {
    private int id;

    private String email;
    private String userName;
    private String phone;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date date;

    private int role;

    private List<BookingsDTO> bookings;

    @Data
    @NoArgsConstructor
    static class BookingsDTO {
        private int id;
        private int guest;
        private Date bookingDate;
        private int total_price;
    }



}
