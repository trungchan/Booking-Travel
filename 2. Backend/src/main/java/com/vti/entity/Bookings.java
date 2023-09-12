package com.vti.entity;

import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Bookings", catalog = "BookingTravels")
public class Bookings implements Serializable {
    @NotNull
    @Column(name = "booking_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "guest", columnDefinition = "1")
    private int guest;

    @Column(name = "status", columnDefinition = "0")
    private int status;

    @Column(name = "booking_date")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date bookingDate;

    @Column(name = "total_price")
    private Double total_price;


    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
//    @Cascade(value = { CascadeType.REMOVE, CascadeType.SAVE_UPDATE })
    private User user;

    @ManyToOne
    @JoinColumn(name = "tour_id", nullable = false)
//    @Cascade(value = { CascadeType.REMOVE, CascadeType.SAVE_UPDATE })
    private Tours tours;



    public Bookings ( int guest, int status, Date bookingDate, User user, Tours tours ) {
        this.guest = guest;
        this.status = status;
        this.bookingDate = bookingDate;
        this.total_price = calculateTotalPrice(tours);
        this.user = user;
        this.tours = tours;
    }
    public double calculateTotalPrice(Tours tours) {
        if (tours == null) {
            return 0.0;
        }
        Double discount = tours.getDiscount();
        Double price = tours.getPrice();
        double priceValue = (price != null) ? price.doubleValue() : 0.0;
        double totalPrice = getGuest() * ((100- discount) / 100) * priceValue;
        long roundedTotalPrice = Math.round(totalPrice);
        return roundedTotalPrice;
    }
}
