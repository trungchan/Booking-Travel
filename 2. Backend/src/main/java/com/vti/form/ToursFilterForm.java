package com.vti.form;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
@Data
@Getter
@Setter
@NoArgsConstructor
public class ToursFilterForm {
    private String search;
    private String findTour;
    private Double minRatting;
    private Double maxRatting;
    private Double minDiscount;
    private Double maxDiscount;
    private Double minPrice;
    private Double maxPrice;
    private String searchDestination;
}
