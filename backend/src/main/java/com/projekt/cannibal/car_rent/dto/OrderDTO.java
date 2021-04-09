package com.projekt.cannibal.car_rent.dto;

import com.projekt.cannibal.car_rent.model.Car;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class OrderDTO {
    private Long userId;
    private Car carToAdd;
}
