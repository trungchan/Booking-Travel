package com.vti.repository;

import com.vti.entity.Departures;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface IDeparturesRepository extends JpaRepository<Departures, Integer>, JpaSpecificationExecutor<Departures> {
    Departures findByName( String name);
}
