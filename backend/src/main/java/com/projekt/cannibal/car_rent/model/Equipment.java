package com.projekt.cannibal.car_rent.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Equipment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private CType carType;

    private int doors;

    private boolean powerWindows;

    private Upholostery upholostery;

    private boolean AC;

    private Gearbox gearbox;

    private boolean ABS;

    private boolean ESP;
}
