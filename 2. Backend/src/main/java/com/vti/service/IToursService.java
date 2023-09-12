package com.vti.service;

import com.vti.entity.Tours;
import com.vti.form.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IToursService {
    Page<Tours> getAllTours( Pageable pageable, ToursFilterForm form );

    Tours getTourById ( int id );

//    Tours findByName ( String name );

//    Tours createTour ( ToursFormForCreating form );

    Tours createOrUpdateTour (ToursFormForCreateOrUpdating form );

    void deleteTour ( int id );
     int deleteManyTour( List<Integer> idDeleteList);
}
