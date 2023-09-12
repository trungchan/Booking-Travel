package com.vti.entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
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
@Table(name = "User", catalog = "BookingTravels")
public class User implements Serializable {
    @Column(name = "user_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    @Column(name = "user_email", length = 50, nullable = false, unique = true)
    private String email;

    @NotNull
    @Column(name = "user_username", length = 50, nullable = false, unique = true)
    private String userName;

    @Column(name = "user_phone", length = 50, unique = true)
    private String phone;

    @Column(name = "create_date")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date date;

    @Column(name = "password", length = 800)
    private String password;

    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    private Role role = Role.USER;
    @OneToMany(mappedBy = "user")
    private List<Bookings> bookings;

    public User ( String email, String userName, String phone, String password ) {
        this.email = email;
        this.userName = userName;
        this.phone = phone;
        this.date = date;
        this.password = password;
        this.role = Role.USER;;
    }


}