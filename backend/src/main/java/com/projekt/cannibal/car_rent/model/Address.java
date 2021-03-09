package com.projekt.cannibal.car_rent.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.boot.web.server.LocalServerPort;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Address {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String country;


  private String city;

  private String postCode;

  private String street;

  private int number;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user;
}
