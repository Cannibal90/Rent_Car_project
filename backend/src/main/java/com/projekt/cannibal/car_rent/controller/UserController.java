package com.projekt.cannibal.car_rent.controller;

import com.projekt.cannibal.car_rent.configuration.AppUser;
import com.projekt.cannibal.car_rent.configuration.LoggedInUser;
import com.projekt.cannibal.car_rent.helpers.Role;
import com.projekt.cannibal.car_rent.model.User;
import com.projekt.cannibal.car_rent.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

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

    @GetMapping("/all")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<User> getAll(){
        return  userService.findAll();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROlE_USER')")
    public Optional<User> getUserById(@PathVariable long id, @LoggedInUser AppUser appUser){
        if(appUser.getId() != id && !appUser.getRole().equals(Role.ROLE_ADMIN.toString())){
               return null;
        }
        return userService.findById(id);
    }

    @PutMapping("/update")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROlE_USER')")
    public User updateUser(@RequestBody User user, @LoggedInUser AppUser appUser){
        if(appUser.getId() != user.getId() && !appUser.getRole().equals(Role.ROLE_ADMIN.toString())){
            return null;
        }
        return userService.update(user);
    }

    @DeleteMapping("/delete")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROlE_USER')")
    public boolean deleteUser(@RequestBody User user, @LoggedInUser AppUser appUser){
        if(appUser.getId() != user.getId() && !appUser.getRole().equals(Role.ROLE_ADMIN.toString())){
            return false;//niedozolona operacja czy cos
        }
        //TODO: sprawdzic wszystko co moze byc powiazane z userem i usunac
        userService.deleteUser(user);
        return true;
    }





}
