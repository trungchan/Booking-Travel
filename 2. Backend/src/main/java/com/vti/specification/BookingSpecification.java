package com.vti.specification;

import com.vti.entity.*;
import com.vti.form.BookingsFilterForm;
import com.vti.form.ToursFilterForm;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.time.LocalDate;

public class BookingSpecification {
    public static Specification<Bookings> buildWhere ( BookingsFilterForm form ) {
        if (form == null) {
            return null;
        }
        return  hasTourNamelike(form.getSearch()).
                and(hasBookingDateGreaterThanOrEqualTo(form.getMinBookingDate())).
                and(hasBookingDateLessThanOrEqualTo(form.getMaxBookingDate())).
                and(hasTotalPriceGreaterThanOrEqualTo(form.getMinTotalPrice())).
                and(hasTotalPriceLessThanOrEqualTo(form.getMaxTotalPrice()));

    }

    private static Specification<Bookings> hasTourNamelike ( String search ) {
        return ( root, query, builder ) -> {
            if (!StringUtils.hasText(search)) {
                return null;
            }
            return builder.like(root.get(Bookings_.tours).get(Tours_.tourName), "%" + search.trim() + "%");
        };
    }

    private static Specification<Bookings> hasBookingDateGreaterThanOrEqualTo ( LocalDate minBookingDate ) {
        return ( root, query, builder ) -> {
            if (minBookingDate == null) {
                return null;
            }
            return builder.greaterThanOrEqualTo(root.get(Bookings_.bookingDate).as(LocalDate.class),minBookingDate);
        };
    }

    private static Specification<Bookings> hasBookingDateLessThanOrEqualTo ( LocalDate maxBookingDate ) {
        return ( root, query, builder ) -> {
            if (maxBookingDate == null) {
                return null;
            }
            return builder.lessThanOrEqualTo(root.get(Bookings_.bookingDate).as(LocalDate.class),maxBookingDate);
        };
    }

    private static Specification<Bookings> hasTotalPriceGreaterThanOrEqualTo ( Double minTotalPrice ) {
        return ( root, query, builder ) -> {
            if (minTotalPrice == null) {
                return null;
            }
            return builder.greaterThanOrEqualTo(root.get(Bookings_.total_price),minTotalPrice);
        };
    }

    private static Specification<Bookings> hasTotalPriceLessThanOrEqualTo ( Double maxTotalPrice ) {
        return ( root, query, builder ) -> {
            if (maxTotalPrice == null) {
                return null;
            }
            return builder.lessThanOrEqualTo(root.get(Bookings_.total_price),maxTotalPrice);
        };
    }

    }



