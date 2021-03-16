package com.projekt.cannibal.car_rent.helpers;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum Role {
    @JsonProperty(value = "Role_USER")
    ROLE_USER("Role_USER"),

    @JsonProperty(value = "Role_ADMIN")
    ROLE_ADMIN("Role_ADMIN");


    private final String value;

    Role(String value){
        this.value = value;
    }

    @Override
    public String toString(){
        return  value;
    }

}
