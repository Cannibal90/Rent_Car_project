package com.projekt.cannibal.car_rent.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.projekt.cannibal.car_rent.helpers.AvailabilityStatus;
import com.projekt.cannibal.car_rent.helpers.CarType;
import com.projekt.cannibal.car_rent.helpers.Fuel;
import com.projekt.cannibal.car_rent.model.helpers.CarBrand;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter

public class Car implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "car_id")
  private Long id;

  @ManyToOne
  @JsonIgnoreProperties("cars")
  @JoinColumn(name = "brand_id")
  private CarBrand brand;

  @NotNull
  private String model;

  @NotNull
  private CarType carType;

  @NotNull
  private String engine;

  @NotNull
  private Fuel fuel;

  private double price;

  private long odometer;

  @NotNull
  private String production_date;

  @NotNull
  private AvailabilityStatus availabilityStatus;

  private String url;

  @NotNull
  private long power;

  @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.REMOVE, CascadeType.MERGE})
  @JoinColumn(name = "equipment_id")
  @JsonIgnoreProperties("car")
  private Equipment equipment;

  @ManyToMany(mappedBy = "cars")
  @JsonIgnoreProperties("cars")
  private List<Order> orders = new ArrayList<>();

  public void addCarBrand(CarBrand carBrand){
    carBrand.getCars().add(this);
    this.brand = carBrand;
  }

  public void addEquipment(Equipment equipment){
      equipment.setCar(this);
      this.equipment = equipment;
  }
}
