package com.vti.repository;
import com.vti.entity.Destinations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface IDestinationsRepository extends JpaRepository<Destinations, Integer>, JpaSpecificationExecutor<Destinations> {
    Destinations findByName( String name);
    Destinations findOneByName( String name);
}
