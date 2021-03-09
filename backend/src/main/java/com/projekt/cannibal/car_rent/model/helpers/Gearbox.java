package com.projekt.cannibal.car_rent.model.helpers;

import com.projekt.cannibal.car_rent.model.Equipment;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Gearbox {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String gearType;

    @OneToMany(mappedBy = "gearbox")
    private List<Equipment> equipment = new ArrayList<>();
}
