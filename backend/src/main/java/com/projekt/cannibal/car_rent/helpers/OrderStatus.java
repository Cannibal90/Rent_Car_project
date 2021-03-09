package com.projekt.cannibal.car_rent.helpers;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum OrderStatus {
    @JsonProperty(value = "Verification")
    VERIFICATION("Verification"),

    @JsonProperty(value = "Wating for payment")
    WAITING_FOR_PAYMENT("Wating for payment"),

    @JsonProperty(value = "Implementation")
    IMPLEMENTATION("Implementation"),

    @JsonProperty(value = "Delivered")
    DELIVERED("Delivered");

    private final String value;

    OrderStatus(String value){
        this.value = value;
    }

    @Override
    public String toString() {
        return value;
    }
}
