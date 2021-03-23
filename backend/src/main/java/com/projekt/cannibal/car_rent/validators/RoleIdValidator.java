package com.projekt.cannibal.car_rent.validators;

import com.projekt.cannibal.car_rent.configuration.AppUser;
import com.projekt.cannibal.car_rent.exceptions.ApiForbiddenException;
import com.projekt.cannibal.car_rent.helpers.Role;

public class RoleIdValidator {
    public static void validate(AppUser appUser, Long id, String message){
        if (appUser.getId() != id && !appUser.getRole().equals(Role.ROLE_ADMIN.toString())){
            throw new ApiForbiddenException(message);
        }
    }
}
