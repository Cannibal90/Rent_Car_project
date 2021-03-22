package com.projekt.cannibal.car_rent.validators;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = {UniqueUsernameValidator.class})
public @interface UniqueUsername {

    String message() default "This username is in use";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
