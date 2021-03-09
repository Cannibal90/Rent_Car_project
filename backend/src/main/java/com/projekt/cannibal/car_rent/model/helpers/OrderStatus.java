package com.projekt.cannibal.car_rent.model.helpers;

import com.projekt.cannibal.car_rent.model.Equipment;
import com.projekt.cannibal.car_rent.model.Order;
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
public class OrderStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String status;

    @OneToMany(mappedBy = "status")
    private List<Order> orders = new ArrayList<>();
}
