package com.projekt.cannibal.car_rent.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Address {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotNull
  private String country;

  @NotNull
  private String city;

  @NotNull
  private String postCode;

  @NotNull
  private String street;

  @NotNull
  private int number;

  @ManyToOne(cascade = CascadeType.PERSIST)
  @JoinColumn(name = "user_id")
  @NotNull
  @JsonIgnoreProperties({"addresses", "orders"})
  private User user;

  public void addUser(User user){
    user.getAddresses().add(this);
    this.user = user;
  }


  @Override
  public String toString() {
    return "Address{"
        + "id="
        + id
        + ", country='"
        + country
        + '\''
        + ", city='"
        + city
        + '\''
        + ", postCode='"
        + postCode
        + '\''
        + ", street='"
        + street
        + '\''
        + ", number="
        + number
        + '}';
  }
}
