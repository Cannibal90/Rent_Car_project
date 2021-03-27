package com.projekt.cannibal.car_rent.dto;

import com.projekt.cannibal.car_rent.helpers.Role;
import com.projekt.cannibal.car_rent.model.User;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserDTO {
    private Long id;
    private String username;
    private String fullname;
    private String email;
    private Role role;
    private String token;

    public UserDTO(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.fullname = user.getFirstname() + " " + user.getLastname();
        this.email = user.getEmail();
        this.role = user.getRole();
    }
}
