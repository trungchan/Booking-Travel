package com.vti.specification;


import com.vti.entity.Departures_;
import com.vti.entity.Destinations_;
import com.vti.entity.Tours;
import com.vti.entity.Tours_;
import com.vti.form.ToursFilterForm;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

public class ToursSpecification {
    public static Specification<Tours> buildWhere ( ToursFilterForm form ) {
        if (form == null) {
            return null;
        }
        return  hasTourNamelike(form.getSearch()).
                or(hasDeparturesNamelike(form.getSearch())).
                or(hasDestinationsNamelike(form.getSearch())).
                or(hasStatusEqual(form.getFindTour())).
                and(hasDestinationsNameLike(form.getSearchDestination())).
                and(hasRattingGreaterThanOrEqualTo(form.getMinRatting())).
                and(hasRattingLessThanOrEqualTo(form.getMaxRatting())).
                and(hasDiscountGreaterThanOrEqualTo(form.getMinDiscount())).
                and(hasDiscountLessThanOrEqualTo(form.getMaxDiscount())).
                and(hasPriceGreaterThanOrEqualTo(form.getMinPrice())).
                and(hasPriceLessThanOrEqualTo(form.getMaxPrice()));
    }

    private static Specification<Tours> hasTourNamelike ( String search ) {
        return ( root, query, builder ) -> {
            if (!StringUtils.hasText(search)) {
                return null;
            }
            return builder.like(root.get(Tours_.tourName), "%" + search.trim() + "%");
        };
    }
    private static Specification<Tours> hasDeparturesNamelike ( String search ) {
        return ( root, query, builder ) -> {
            if (!StringUtils.hasText(search)) {
                return null;
            }
            return builder.like(root.get(Tours_.departures).get(Departures_.name), "%" + search.trim() + "%") ;
        };
    }

    private static Specification<Tours> hasDestinationsNamelike ( String search ) {
        return ( root, query, builder ) -> {
            if (!StringUtils.hasText(search)) {
                return null;
            }
            return builder.like(root.get(Tours_.destinations).get(Destinations_.name), "%" + search.trim() + "%") ;
        };
    }



    private static Specification<Tours> hasStatusEqual(String findTour) {
        return (root, query, builder) -> {
            if (!StringUtils.hasText(findTour)) {
                return null;
            }

            return builder.equal(root.get(Tours_.status), Tours.Status.valueOf(findTour));
        };
    }


    private static Specification<Tours> hasDestinationsNameLike ( String search ) {
        return ( root, query, builder ) -> {
            if (!StringUtils.hasText(search)) {
                return null;
            }
            return builder.like(root.get(Tours_.destinations).get(Destinations_.name), "%" + search.trim() + "%") ;
        };
    }


    private static Specification<Tours> hasRattingGreaterThanOrEqualTo ( Double minRatting ) {
        return ( root, query, builder ) -> {
            if (minRatting == null) {
                return null;
            }
            return builder.greaterThanOrEqualTo(root.get(Tours_.ratting),minRatting);
        };
    }

    private static Specification<Tours> hasRattingLessThanOrEqualTo ( Double maxRatting ) {
        return ( root, query, builder ) -> {
            if (maxRatting == null) {
                return null;
            }
            return builder.lessThanOrEqualTo(root.get(Tours_.ratting),maxRatting);
        };
    }
    private static Specification<Tours> hasDiscountGreaterThanOrEqualTo ( Double minDiscount ) {
        return ( root, query, builder ) -> {
            if (minDiscount == null) {
                return null;
            }
            return builder.greaterThanOrEqualTo(root.get(Tours_.discount),minDiscount);
        };
    }

    private static Specification<Tours> hasDiscountLessThanOrEqualTo ( Double maxDiscount ) {
        return ( root, query, builder ) -> {
            if (maxDiscount == null) {
                return null;
            }
            return builder.lessThanOrEqualTo(root.get(Tours_.discount),maxDiscount);
        };
    }
    private static Specification<Tours> hasPriceGreaterThanOrEqualTo ( Double minPrice ) {
        return ( root, query, builder ) -> {
            if (minPrice == null) {
                return null;
            }
            return builder.greaterThanOrEqualTo(root.get(Tours_.price),minPrice);
        };
    }

    private static Specification<Tours> hasPriceLessThanOrEqualTo ( Double maxPrice ) {
        return ( root, query, builder ) -> {
            if (maxPrice == null) {
                return null;
            }
            return builder.lessThanOrEqualTo(root.get(Tours_.price),maxPrice);
        };
    }


}
