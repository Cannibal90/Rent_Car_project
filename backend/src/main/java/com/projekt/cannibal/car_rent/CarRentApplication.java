package com.projekt.cannibal.car_rent;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class CarRentApplication {

  public static void main(String[] args) {
    SpringApplication.run(CarRentApplication.class, args);
  }
}
