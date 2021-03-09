package com.projekt.cannibal.car_rent.model.helpers;

import com.projekt.cannibal.car_rent.model.Car;
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
public class Fuel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fuelType;

    @OneToMany(mappedBy = "fuel")
    private List<Car> cars = new ArrayList<>();
}
