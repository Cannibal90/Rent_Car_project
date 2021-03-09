package com.projekt.cannibal.car_rent.helpers;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum CarType {
  @JsonProperty(value = "Cabriolet")
  CABRIOLET("Cabriolet"),

  @JsonProperty(value = "Coupe")
  COUPE("Coupe"),

  @JsonProperty(value = "Hatchback")
  HATCHBACK("Hatchback"),

  @JsonProperty(value = "Liftback")
  LIFTBACK("Liftback"),

  @JsonProperty(value = "Kombi")
  KOMBI("Kombi"),

  @JsonProperty(value = "Minivan")
  MINIVAN("Minivan"),

  @JsonProperty(value = "Sedan")
  SEDAN("Sedan"),

  @JsonProperty(value = "SUV")
  SUV("SUV");

  private final String value;

  CarType(String value) {
    this.value = value;
  }

  @Override
  public String toString() {
    return value;
  }
}
