package com.projekt.cannibal.car_rent.helpers;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum Upholostery {
    @JsonProperty(value = "Fabric")
    FABRIC("Fabric"),

    @JsonProperty(value = "Half leather")
    HALF_LEATHER("Half leather"),

    @JsonProperty(value = "Leather")
    LEATHER("Leather"),

    @JsonProperty(value = "Velor")
    VELOR("Velor");

    private final String value;

    Upholostery(String value){
        this.value = value;
    }

    @Override
    public String toString() {
        return value;
    }
}
