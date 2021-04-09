package com.projekt.cannibal.car_rent.dto;

import com.projekt.cannibal.car_rent.model.Car;
import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class OrderDTO {
    @NotNull
    private Long userId;
    @Valid
    private Car carToAdd;
}
