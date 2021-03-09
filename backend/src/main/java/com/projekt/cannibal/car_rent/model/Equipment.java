package com.projekt.cannibal.car_rent.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.projekt.cannibal.car_rent.helpers.CarType;
import com.projekt.cannibal.car_rent.helpers.Gearbox;
import com.projekt.cannibal.car_rent.helpers.Upholostery;
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
public class Equipment implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private int doors;

  private boolean powerWindows;

  private Upholostery upholostery;

  private boolean AC;

  private Gearbox gearbox;

  private boolean ABS;

  private boolean ESP;

  @OneToOne(mappedBy = "equipment")
  private Car car;

  @Override
  public String toString() {
    return "Equipment{" +
            "id=" + id +
            ", doors=" + doors +
            ", powerWindows=" + powerWindows +
            ", upholostery=" + upholostery +
            ", AC=" + AC +
            ", gearbox=" + gearbox +
            ", ABS=" + ABS +
            ", ESP=" + ESP +
            '}';
  }
}
