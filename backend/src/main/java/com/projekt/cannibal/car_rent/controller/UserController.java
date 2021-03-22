package com.projekt.cannibal.car_rent.controller;

import com.projekt.cannibal.car_rent.dao.UserDao;
import com.projekt.cannibal.car_rent.model.User;
import com.projekt.cannibal.car_rent.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public User saveUser(@Valid @RequestBody User user){
        return userService.add(user);
    }




}
