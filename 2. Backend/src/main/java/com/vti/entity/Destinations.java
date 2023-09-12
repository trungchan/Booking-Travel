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
@Table(name = "Destinations", catalog = "BookingTravels")
public class Destinations implements Serializable {

    @Column(name = "destination_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotNull
    @Column(name = "destination_name", length = 50, nullable = false)
    private String name;
    @NotNull
    @Column(name = "status")
    @Enumerated(value = EnumType.STRING)
    private Status status;

    public enum Status {
        Domestic, Foreign
    }
    @OneToMany(mappedBy = "destinations")
//    @Cascade(value = { CascadeType.REMOVE, CascadeType.SAVE_UPDATE})
    private List<Tours> tours;

    public Destinations ( String name ) {
        this.name = name;
    }

    public Destinations ( int id ) {
        this.id = id;
    }

    public Destinations ( String name, Status status ) {
        this.name = name;
        this.status = status;
    }
}

