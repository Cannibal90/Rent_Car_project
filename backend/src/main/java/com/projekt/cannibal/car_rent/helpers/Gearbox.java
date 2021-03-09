package com.projekt.cannibal.car_rent.helpers;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum Gearbox {
    @JsonProperty(value = "Automatic")
    AUTOMATIC("Automatic"),

    @JsonProperty(value = "Manual 5S")
    MANUAL_5S("Manual 5S"),

    @JsonProperty(value = "Manual 6S")
    MANUAL_6S("Manual 6S");

    private final String value;

    Gearbox(String value){
        this.value = value;
    }

    @Override
    public String toString() {
        return value;
    }
}
