package com.projekt.cannibal.car_rent.model;

import com.projekt.cannibal.car_rent.helpers.PaymentType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;
import java.time.LocalDate;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Payment {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long Id;

  @NotNull
  private PaymentType paymentType;

  @NotNull
  @Digits(integer = 8, fraction = 2, message = "Amount moze miec max 8 cyfr")
  @PositiveOrZero( message = "Amount musi być większe lub rowne 0")
  private double amount;

  @NotNull
  //TODO: cos z ta data pomyslec
  private LocalDate paymentDate;

  @OneToOne(mappedBy = "payment")
  private Order order;

  public Payment(@NotNull PaymentType paymentType, @NotNull double amount, @NotNull LocalDate paymentDate) {
    this.paymentType = paymentType;
    this.amount = amount;
    this.paymentDate = paymentDate;
  }

  @Override
  public String toString() {
    return "Payment{"
        + "Id="
        + Id
        + ", paymentType="
        + paymentType
        + ", amount="
        + amount
        + ", paymentDate="
        + paymentDate
        + '}';
  }
}
