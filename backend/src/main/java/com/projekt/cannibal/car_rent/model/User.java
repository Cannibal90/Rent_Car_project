package com.projekt.cannibal.car_rent.model;

import javax.validation.constraints.NotNull;

import com.projekt.cannibal.car_rent.helpers.Role;
import com.projekt.cannibal.car_rent.validators.UniqueEmail;
import com.projekt.cannibal.car_rent.validators.UniqueUsername;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotNull
  @Size(min = 2, max = 15)
  @UniqueUsername
  private String username;

  @NotNull
  @Size(min = 2, max = 15)
  private String firstname;

  @NotNull
  @Size(min = 3, max = 15)
  private String lastname;

  @UniqueEmail
  private String email;

  @NotNull
  private String password;

  // TODO add to liquibase
  @NotNull
  private Role role;

  @OneToMany(
      mappedBy = "user",
      cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
  private List<Address> addresses = new ArrayList<>();

  @OneToMany(mappedBy = "user", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
  private List<Order> orders = new ArrayList<>();

  public void addAddress(Address address) {
    address.setUser(this);
    getAddresses().add(address);
  }

  public void addOrder(Order order) {
    order.setUser(this);
    getOrders().add(order);
  }

  public User(String firstname, String lastname, String email, String password, Role role) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  @Override
  public String toString() {
    return "User{"
        + "id="
        + id
        + ", firstname='"
        + firstname
        + '\''
        + ", lastname='"
        + lastname
        + '\''
        + ", email='"
        + email
        + '\''
        + ", password='"
        + password
        + '\''
        + ", role="
        + role
        + '}';
  }
}
