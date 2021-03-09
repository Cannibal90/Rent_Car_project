package com.projekt.cannibal.car_rent.helpers;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum Fuel {
    @JsonProperty(value = "Petrol")
    PETROL("Petrol"),
    @JsonProperty(value = "Diesel")
    DIESEL("Diesel"),
    @JsonProperty(value = "Electric")
    ELECTRIC("Electric");

    private final String value;

    Fuel(String value){
        this.value = value;
    }

    @Override
    public String toString() {
        return value;
    }
}
