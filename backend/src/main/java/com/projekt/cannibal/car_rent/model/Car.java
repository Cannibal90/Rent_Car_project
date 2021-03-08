package com.projekt.cannibal.car_rent.model;


import com.projekt.cannibal.car_rent.model.helpers.CarBrand;
import com.projekt.cannibal.car_rent.model.helpers.Fuel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Car implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "car_id")
  private Long id;

  @ManyToOne
  @JoinColumn(name = "brand_id")
  private CarBrand brand;

  private String model;

  private String engine;

  @ManyToOne
  @JoinColumn(name = "fuel_id")
  private Fuel fuel;

  private double price;

  private long odometer;

  private String production_date;

  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "availability_id")
  private Availability availability;

  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "equipment_id")
  private Equipment equipment;

  @ManyToMany(mappedBy = "cars")
  private List<Order> orders = new ArrayList<>();
}
