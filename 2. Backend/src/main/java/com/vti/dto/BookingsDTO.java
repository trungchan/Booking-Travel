package com.vti.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import java.util.Date;



@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookingsDTO {
    private int id;
    private int guest;
    private int status;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date bookingDate;
    private int total_price;
    private String userId;
    private String toursName;

}
