package com.vti.entity;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name = "Departures", catalog = "BookingTravels")
public class Departures implements Serializable {
    @Column(name = "departure_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    @Column(name = "departure_name", length = 50, nullable = false)
    private String name;

    @OneToMany(mappedBy = "departures")
//    @Cascade(value = { CascadeType.REMOVE, CascadeType.SAVE_UPDATE})
    private List<Tours> tours;



    public Departures ( String name ) {
        this.name = name;
    }

    public Departures ( int id ) {
        this.id = id;
    }
}
