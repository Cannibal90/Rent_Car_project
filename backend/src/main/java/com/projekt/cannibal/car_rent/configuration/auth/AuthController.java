package com.projekt.cannibal.car_rent.configuration.auth;

import com.projekt.cannibal.car_rent.helpers.Role;
import com.projekt.cannibal.car_rent.model.User;
import com.projekt.cannibal.car_rent.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.yaml.snakeyaml.util.ArrayUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class AuthController {

    @Autowired
    private UserService userService;

    private List<User> users = new ArrayList<>();

    public AuthController(){
        User user = new User("user", "userL", "www@gmail.com", "user", Role.ROLE_USER);
        User user1 = new User("admin", "adminL", "wwwa@gmail.com", "admin", Role.ROLE_ADMIN);
        users.add(user);
        users.add(user1);
//        userService.add(user);
//        userService.add(user);
    }

    @PostMapping("api/auth")
    public ResponseEntity<?> auth(@RequestBody UserAuthDTO userAuthDTO){
        Optional<User> optionalUser = users.stream().filter(u -> (u.getFirstname().equals(userAuthDTO.getName()) && u.getPassword().equals(userAuthDTO.getPassword()))).findFirst();
        if(!optionalUser.isPresent()){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Invalid credentials");
        }
        User user = optionalUser.get();

        String token = Jwts.builder()
                .claim("username", user.getFirstname())
                .claim("id",""+user.getId())
                .signWith(SignatureAlgorithm.HS512, "my_app").compact();

        return ResponseEntity.ok(token);


    }
}
