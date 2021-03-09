package com.projekt.cannibal.car_rent.helpers;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum PaymentType {
    @JsonProperty(value = "Bank transfer")
    BANK_TRANSFER("Bank transfer"),

    @JsonProperty(value = "Cash")
    CASH("Cash"),

    @JsonProperty(value = "Payment card")
    PAYMENT_CARD("Payment card");

    private final String value;

    PaymentType(String value){
        this.value = value;
    }

    @Override
    public String toString() {
        return value;
    }
}
