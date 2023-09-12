package com.vti.service;

import com.vti.form.*;
import com.vti.repository.IBookingsRepository;
import com.vti.repository.IToursRepository;
import com.vti.specification.ToursSpecification;
import com.vti.entity.Tours;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ToursService implements IToursService {
    @Autowired
    private IToursRepository repository;

    @Autowired
    private IBookingsRepository bookingsRepository;

    @Override
    public Page<Tours> getAllTours ( Pageable pageable, ToursFilterForm form ) {
        return repository.findAll(ToursSpecification.buildWhere(form), pageable);
    }

    @Override
    public Tours getTourById ( int id ) {
        return repository.findById(id).orElse(null);
    }

//    @Override
//    public Tours findByName ( String name ) {
//        return repository.findByName(name);
//    }


    @Override
    public Tours createOrUpdateTour (ToursFormForCreateOrUpdating form ) {

        return repository.save(form.toTours());
    }



    @Override
    public void deleteTour ( int id ) {
        bookingsRepository.deleteByToursId(id);
        repository.deleteById(id);

    }

    @Override
    public int deleteManyTour ( List<Integer> idDeleteList ) {
        return repository.deleteManyTours(idDeleteList);
    }


}
