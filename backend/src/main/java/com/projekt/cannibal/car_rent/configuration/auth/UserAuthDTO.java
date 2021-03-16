package com.projekt.cannibal.car_rent.configuration.auth;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserAuthDTO {
    private String name;
    private String password;
}
