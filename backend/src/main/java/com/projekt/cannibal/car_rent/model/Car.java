package com.projekt.cannibal.car_rent.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "car_id")
    private Long id;

    private Brand brand;

    private String Model;

//    private Availability availability; to jescze do uzgodnienia

    private String engine;

    private Fuel fuel;

    private Equipment equipment;

    private double price;

    private long odometer;

    private LocalDate production_date;

    @ManyToMany(mappedBy = "cars")
    private List<Order> orders = new ArrayList<>();

}
