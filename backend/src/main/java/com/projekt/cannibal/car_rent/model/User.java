package com.projekt.cannibal.car_rent.model;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import com.projekt.cannibal.car_rent.helpers.Role;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

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

  private String firstname;


  private String lastname;


  private String email;

  private String password;

  //TODO add to liquibase
  private Role role;

  @OneToMany(
      mappedBy = "user",
      cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
  private List<Address> addresses = new ArrayList<>();

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
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
    return "User{" +
            "id=" + id +
            ", firstname='" + firstname + '\'' +
            ", lastname='" + lastname + '\'' +
            ", email='" + email + '\'' +
            ", password='" + password + '\'' +
            ", role=" + role +
            '}';
  }
}
