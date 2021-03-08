package com.projekt.cannibal.car_rent.model;

import com.projekt.cannibal.car_rent.model.helpers.CarType;
import com.projekt.cannibal.car_rent.model.helpers.Gearbox;
import com.projekt.cannibal.car_rent.model.helpers.Upholostery;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

  @ManyToOne
  @JoinColumn(name = "carType_id")
  private CarType carType;

  private int doors;

  private boolean powerWindows;

  @ManyToOne
  @JoinColumn(name = "upholostery_id")
  private Upholostery upholostery;

  private boolean AC;

  @ManyToOne
  @JoinColumn(name = "gearbox_id")
  private Gearbox gearbox;

  private boolean ABS;

  private boolean ESP;

  @OneToOne(mappedBy = "equipment")
  private Car car;
}
