package com.vti.repository;
import com.vti.entity.Bookings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IBookingsRepository extends JpaRepository<Bookings, Integer>, JpaSpecificationExecutor<Bookings> {
//    Bookings findByName( String name);
    @Modifying
    @Transactional
    @Query("DELETE FROM Bookings WHERE id IN(:ids)")
    public int deleteManyBookings(@Param("ids") List<Integer> idDeleteList);

    public void deleteByIdIn(List<Integer> idDeleteList);//DELETE FROM Bookings WHERE id IN(:ids)"

    void deleteByToursId(Integer id);



}
