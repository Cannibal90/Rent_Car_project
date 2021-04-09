package com.projekt.cannibal.car_rent.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Address {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank(message = "Country nie może być puste!")
  private String country;

  @NotBlank(message = "City nie może być puste!")
  private String city;

  @NotBlank(message = "Post Code nie może być puste!")
  @Pattern(regexp = "[0-9]{2}-[0-9]{3}", message = "Post Code ma zły format!")
  private String postCode;

  @NotBlank(message = "Street nie może być puste!")
  private String street;

  @NotNull(message = "Number nie może być pusty!")
  @Digits(integer = 4, fraction = 0)
  private int number;

  @ManyToOne(cascade = CascadeType.PERSIST)
  @JoinColumn(name = "user_id")
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
