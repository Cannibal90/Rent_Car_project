package com.projekt.cannibal.car_rent.validators;

import com.projekt.cannibal.car_rent.model.User;
import com.projekt.cannibal.car_rent.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.Optional;


public class UniqueUsernameValidator implements ConstraintValidator<UniqueUsername, String> {

    @Autowired
    private UserService userService;

    @Override
    public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {
        Optional<User> userInDB = userService.findByUsername(s);
        return !userInDB.isPresent();
    }
}
