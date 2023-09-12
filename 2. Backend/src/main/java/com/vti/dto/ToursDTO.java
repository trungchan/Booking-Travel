package com.vti.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.vti.entity.Bookings;
import com.vti.entity.Departures;
import com.vti.entity.Destinations;
import lombok.*;
import java.util.Date;
import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class ToursDTO {
    private int id;
    private String tourName;
    private String imageUrl;
    private Double ratting;
    private Double discount;

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date arrival;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date leaving;
    private String description;
    private Double price;
    private String departuresName;
    private String destinationsName;
    private String status;
    private Double priceSale;
    private List<BookingsDTO> bookings;

    @Data
    @NoArgsConstructor
    static class BookingsDTO{
        private int id;
        private int guest;
        private Date bookingDate;
        private int total_price;
    }
}
