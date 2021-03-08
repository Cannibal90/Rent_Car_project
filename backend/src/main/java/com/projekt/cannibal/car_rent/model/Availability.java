package com.projekt.cannibal.car_rent.model;

import com.projekt.cannibal.car_rent.helpers.AvailabilityStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Availability {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private AvailabilityStatus availabilityStatus;

  private Integer count;

  @ManyToOne
  @JoinColumn(name = "car_id")
  private Car car;
}
