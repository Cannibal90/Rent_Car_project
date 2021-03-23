package com.projekt.cannibal.car_rent.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ApiNoFoundResourceException extends RuntimeException {
    
    public ApiNoFoundResourceException(String message) {
        super(message);
    }

    public ApiNoFoundResourceException(String message, Throwable cause) {
        super(message, cause);
    }
}
