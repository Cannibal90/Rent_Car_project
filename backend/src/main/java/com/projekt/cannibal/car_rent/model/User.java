package com.projekt.cannibal.car_rent.model;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.projekt.cannibal.car_rent.helpers.Role;
import com.projekt.cannibal.car_rent.validators.UniqueEmail;
import com.projekt.cannibal.car_rent.validators.UniqueUsername;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
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

  @NotBlank(message = "Username nie może być puste")
  @Size(min = 2, max = 15)
  @UniqueUsername
  private String username;

  @NotBlank(message = "Firstname nie może być puste")
  @Size(min = 2, max = 15)
  private String firstname;

  @NotBlank(message = "Lastname nie może być puste")
  @Size(min = 3, max = 15)
  private String lastname;

  @UniqueEmail
  //TODO zastanowic się nad tym dlugim regexem
  private String email;

  @NotBlank(message = "Password nie może być puste")
  private String password;

  @NotNull
  private Role role;

  @OneToMany(
      mappedBy = "user",
      cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
  private List<Address> addresses = new ArrayList<>();

  @OneToMany(mappedBy = "user", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
  private List<Order> orders = new ArrayList<>();

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
