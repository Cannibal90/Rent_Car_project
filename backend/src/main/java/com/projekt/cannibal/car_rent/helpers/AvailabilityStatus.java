package com.projekt.cannibal.car_rent.helpers;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum AvailabilityStatus {
  @JsonProperty(value = "Available")
  AVAILABLE("Available"),

  @JsonProperty(value = "Soon")
  SOON("Soon"),

  @JsonProperty(value = "Reserved")
  RESERVED("Reserved"),

  @JsonProperty(value = "Out of stock")
  OUT_OF_STOCK("Out of stock");

    private final String value;

    AvailabilityStatus(String value){
        this.value = value;
    }

    @Override
    public String toString() {
        return value;
    }
}
