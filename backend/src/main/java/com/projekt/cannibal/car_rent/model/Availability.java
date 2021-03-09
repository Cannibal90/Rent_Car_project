package com.projekt.cannibal.car_rent.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.projekt.cannibal.car_rent.helpers.AvailabilityStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Availability implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private AvailabilityStatus availabilityStatus;

  private Integer count;

  @OneToOne(mappedBy = "availability")
  private Car car;

}
