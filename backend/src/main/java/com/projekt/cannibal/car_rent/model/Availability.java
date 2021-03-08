package com.projekt.cannibal.car_rent.model;

import com.projekt.cannibal.car_rent.model.helpers.AvailabilityStatus;
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

  @ManyToOne
  @JoinColumn(name = "availabilityStatus_id")
  private AvailabilityStatus availabilityStatus;

  private Integer count;

  @OneToOne(mappedBy = "availability")
  private Car car;
}
