package com.projekt.cannibal.car_rent.model;

import com.projekt.cannibal.car_rent.helpers.OrderStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "order_basket")
public class Order {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "order_id")
  private Long id;

  @NotNull private OrderStatus status;

  @ManyToOne
  @JoinColumn(name = "user_id")
  @NotNull
  private User user;

  @ManyToMany
  @JoinTable(
      name = "order_cars",
      joinColumns = {@JoinColumn(name = "id_order", referencedColumnName = "order_id")},
      inverseJoinColumns = {@JoinColumn(name = "id_car", referencedColumnName = "car_id")})
  private List<Car> cars = new ArrayList<>();

  @OneToOne(cascade = CascadeType.PERSIST)
  @JoinColumn(name = "payment_id")
  private Payment payment;

  @Override
  public String toString() {
    return "Order{"
        + "id="
        + id
        + ", status="
        + status
        + ", user="
        + user
        + ", cars="
        + cars
        + ", payment="
        + payment
        + '}';
  }
}
