package com.projekt.cannibal.car_rent.helpers;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum Role {
    @JsonProperty(value = "ROLE_USER")
    ROLE_USER("ROLE_USER"),

    @JsonProperty(value = "ROLE_ADMIN")
    ROLE_ADMIN("ROLE_ADMIN");


    private final String value;

    Role(String value){
        this.value = value;
    }

    @Override
    public String toString(){
        return  value;
    }

}
