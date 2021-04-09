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
import javax.validation.Valid;
import javax.validation.constraints.*;
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
  @Valid
  private CarBrand brand;

  @NotBlank(message = "Pole Model nie może być puste!")
  private String model;

  @NotNull
  private CarType carType;

  @NotNull(message = "Pole Engine nie może być puste!")
  private String engine;

  @NotNull
  private Fuel fuel;

  @NotNull
  @Digits(integer = 7, fraction = 2, message = "Price musi byc max liczba 7 cyfrowa")
  @PositiveOrZero(message = "Price musi byc wieksza od 0")
  private double price;

  @NotNull
  @Digits(integer = 7, fraction = 0, message = "Odometer musi byc max liczba 7 cyfrowa")
  @PositiveOrZero(message = "Odometer musi byc wieksza od 0")
  private long odometer;

  @NotBlank(message = "Pole Production Date nie może być puste!")
  private String production_date;

  @NotNull
  private AvailabilityStatus availabilityStatus;

  private String url;

  @NotNull(message = "Pole Power nie może być puste!")
  @Digits(integer = 3, fraction = 0, message = "Power musi byc max liczba 3 cyfrowa")
  private long power;

  @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.REMOVE, CascadeType.MERGE})
  @JoinColumn(name = "equipment_id")
  @JsonIgnoreProperties("car")
  @Valid
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
