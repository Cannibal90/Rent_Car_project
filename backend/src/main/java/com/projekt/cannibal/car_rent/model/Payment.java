package com.projekt.cannibal.car_rent.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.time.LocalDate;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Payment {

    @Id
    @GeneratedValue
    private Long Id;

    private Type type;

    private double amount;

    private LocalDate paymentDate;

    @OneToOne(mappedBy = "payment")
    private Order order;
}
