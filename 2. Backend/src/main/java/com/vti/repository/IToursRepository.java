package com.vti.repository;

import com.vti.entity.Tours;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IToursRepository extends JpaRepository<Tours, Integer>, JpaSpecificationExecutor<Tours> {
//    Tours findByName( String name);
    @Modifying
    @Transactional
    @Query("DELETE FROM Tours WHERE id IN(:ids)")
    public int deleteManyTours(@Param("ids") List<Integer> idDeleteList);

}
