package com.projekt.cannibal.car_rent.model;

import com.projekt.cannibal.car_rent.helpers.PaymentType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Payment {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long Id;

  private PaymentType type;

  private double amount;

  private LocalDate paymentDate;

  @OneToOne(mappedBy = "payment")
  private Order order;
}
