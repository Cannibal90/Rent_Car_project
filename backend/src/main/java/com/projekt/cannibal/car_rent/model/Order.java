package com.projekt.cannibal.car_rent.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
  @JsonIgnoreProperties({"orders", "addresses"})
  @NotNull
  private User user;

  @ManyToMany(cascade = {CascadeType.MERGE})
  @JsonIgnoreProperties("orders")
  @JoinTable(
      name = "order_cars",
      joinColumns = {@JoinColumn(name = "id_order", referencedColumnName = "order_id")},
      inverseJoinColumns = {@JoinColumn(name = "id_car", referencedColumnName = "car_id")})
  private List<Car> cars = new ArrayList<>();

  @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
  @JsonIgnoreProperties("order")
  @JoinColumn(name = "payment_id")
  private Payment payment;

  public void addPayment(Payment payment){
    payment.setOrder(this);
    this.payment = payment;
  }

  public void addCar(Car car){
    car.getOrders().add(this);
    this.cars.add(car);
  }

  public void addUser(User user){
    user.getOrders().add(this);
    this.user = user;
  }


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
