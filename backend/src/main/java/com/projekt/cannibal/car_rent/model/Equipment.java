package com.projekt.cannibal.car_rent.model;

import com.projekt.cannibal.car_rent.helpers.Gearbox;
import com.projekt.cannibal.car_rent.helpers.Upholostery;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Equipment implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotNull
  private int doors;

  @NotNull
  private boolean powerWindows;

  @NotNull
  private Upholostery upholostery;

  @NotNull
  private boolean AC;

  @NotNull
  private Gearbox gearbox;

  @NotNull
  private boolean ABS;

  @NotNull
  private boolean ESP;

  @OneToOne(mappedBy = "equipment")
  @NotNull
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
