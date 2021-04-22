package com.projekt.cannibal.car_rent.controller;

import com.projekt.cannibal.car_rent.configuration.AppUser;
import com.projekt.cannibal.car_rent.configuration.LoggedInUser;
import com.projekt.cannibal.car_rent.model.User;
import com.projekt.cannibal.car_rent.service.UserService;
import com.projekt.cannibal.car_rent.validators.RoleIdValidator;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;



@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("api/user")
public class UserController {

  @Autowired private UserService userService;

  @PostMapping("/save")
  public User saveUser(@Valid @RequestBody User user) {
    return userService.add(user);
  }

  @GetMapping("/all")
  @PreAuthorize("hasRole('ROLE_ADMIN')")
  public Page<User> getAll(Pageable page) {
    return userService.findAll(page);
  }

  @GetMapping("/{id}")
  @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
  public User getUserById(
      @PathVariable("id") long id, @LoggedInUser AppUser appUser) {
    RoleIdValidator.validate(appUser,id, "This resource is forbbiden for this role");
    return userService.findById(id);
  }

  @PutMapping("/update/{id}")
  @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
  public User updateUser(
      @PathVariable(name = "id") Long id,@RequestBody User user, @LoggedInUser AppUser appUser) {
    RoleIdValidator.validate(appUser,id, "This resource is forbbiden for this role");
    return userService.update(id, user);
  }

  @DeleteMapping("/delete/{id}")
  @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
  public User deleteUser(
      @PathVariable(name = "id") Long id, @LoggedInUser AppUser appUser) {
    RoleIdValidator.validate(appUser,id, "This resource is forbbiden for this role");
    return  userService.deleteUser(id);
  }
}
