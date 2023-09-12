package com.vti.entity;

import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Tours", catalog = "BookingTravels")
public class Tours implements Serializable {

    @NotNull
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tour_id")
    private int id;
    @NotNull
    @Column(name = "tour_name", length = 400, nullable = false)
    private String tourName;

    @NotNull
    @Column(name = "image_url", length = 500)
    private String imageUrl;

    @NotNull
    @Column(name = "ratting")
    private Double ratting;

    @NotNull
    @Column(name = "disccount")
    private Double discount;

    @Column(name = "arrival")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date arrival;

    @Column(name = "leaving")
    @Temporal(TemporalType.TIMESTAMP)
    private Date leaving;

    @NotNull
    @Column(name = "description", length = 500, nullable = false)
    private String description;

    @NotNull
    @Column(name = "price")
    private Double price;
    @NotNull
    @Column(name = "status")
    @Enumerated(value = EnumType.STRING)
    private Status status;

    public enum Status {
        Domestic, Foreign
    }
    @NotNull
    @Column(name = "price_sale")
    private Double priceSale;

    @ManyToOne
    @JoinColumn(name = "departure_id", nullable = false)
//    @Cascade(value = { CascadeType.REMOVE, CascadeType.SAVE_UPDATE })
    private Departures departures;

    @ManyToOne
    @JoinColumn(name = "destination_id", nullable = false)
//    @Cascade(value = { CascadeType.REMOVE, CascadeType.SAVE_UPDATE })
    private Destinations destinations;

    @OneToMany(mappedBy = "tours")
    private List<Bookings> bookings;

    public Tours ( String tourName, String imageUrl, Double ratting, Double discount, Date arrival, Date leaving, String description, Double price,Status status,Departures departures, Destinations destinations  ) {
        this.tourName = tourName;
        this.imageUrl = imageUrl;
        this.ratting = ratting;
        this.discount = discount;
        this.arrival = arrival;
        this.leaving = leaving;
        this.description = description;
        this.price = price;
        this.status = status;
        this.priceSale = calculatePriceSale();
        this.departures = departures;
        this.destinations = destinations;
    }

    public Tours ( int id ) {
        this.id = id;
    }
    public double calculatePriceSale() {
        double priceSale = this.price - this.price*this.discount/100;
        long roundedPriceSale = Math.round(priceSale);
        return roundedPriceSale;
    }
}
