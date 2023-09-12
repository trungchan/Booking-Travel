package com.vti.form;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
//nhớ truyền data vào
@Data
@Getter
@Setter
@NoArgsConstructor
public class BookingsFilterForm {
    private String search;
    private LocalDate minBookingDate;
    private LocalDate maxBookingDate;
    private Double minTotalPrice;
    private Double maxTotalPrice;


}
