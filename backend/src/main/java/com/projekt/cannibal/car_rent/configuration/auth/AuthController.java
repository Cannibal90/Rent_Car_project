package com.projekt.cannibal.car_rent.configuration.auth;


import com.projekt.cannibal.car_rent.model.User;
import com.projekt.cannibal.car_rent.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import java.util.Optional;

@RestController
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    PasswordEncoder passwordEncoder;


    @PostMapping("api/auth")
    public ResponseEntity<?> auth(@RequestBody UserAuthDTO userAuthDTO){

    userService.findAll().forEach(System.out::println);
        Optional<User> optionalUser = userService.findAll().stream().filter(u-> u.getUsername().equals(userAuthDTO.getName()) && passwordEncoder.matches(userAuthDTO.getPassword(), u.getPassword())).findFirst();
        if(!optionalUser.isPresent()){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Invalid credentials");
        }
        User user = optionalUser.get();

        String token = Jwts.builder()
                .claim("username", user.getFirstname())
                .claim("id",""+user.getId())
                .claim("role", user.getRole().toString())
                .signWith(SignatureAlgorithm.HS512, "my_app").compact();

        return ResponseEntity.ok(token);
    }
}
