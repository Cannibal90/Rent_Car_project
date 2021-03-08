package com.projekt.cannibal.car_rent.model;

import com.projekt.cannibal.car_rent.helpers.CarType;
import com.projekt.cannibal.car_rent.helpers.Gearbox;
import com.projekt.cannibal.car_rent.helpers.Upholostery;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Equipment {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private CarType carType;

  private int doors;

  private boolean powerWindows;

  private Upholostery upholostery;

  private boolean AC;

  private Gearbox gearbox;

  private boolean ABS;

  private boolean ESP;

  @OneToOne(mappedBy = "equipment")
  private Car car;
}
