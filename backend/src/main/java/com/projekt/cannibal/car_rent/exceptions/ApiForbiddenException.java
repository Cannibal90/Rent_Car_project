package com.projekt.cannibal.car_rent.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class ApiForbiddenException extends RuntimeException{
    public ApiForbiddenException(String message) {
        super(message);
    }

    public ApiForbiddenException(String message, Throwable cause) {
        super(message, cause);
    }
}
