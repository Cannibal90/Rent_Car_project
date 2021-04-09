package com.projekt.cannibal.car_rent.controller;

import com.projekt.cannibal.car_rent.configuration.AppUser;
import com.projekt.cannibal.car_rent.configuration.LoggedInUser;
import com.projekt.cannibal.car_rent.helpers.Role;
import com.projekt.cannibal.car_rent.model.Address;
import com.projekt.cannibal.car_rent.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("api/address")
public class AddressController {

  @Autowired private AddressService addressService;

  @GetMapping("/all")
  @PreAuthorize("hasRole('ROLE_ADMIN')")
  public List<Address> getAll() {
    return addressService.findAll();
  }

  @GetMapping("/{id}")
  @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
  public List<Address> getAddressByUserId(@PathVariable(name = "id") Long id){
    System.out.println("adresy: " + addressService.findByUserId(id));
    return addressService.findByUserId(id);
  }

  @PostMapping("/add/{id}")
  @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
  public Address addAddress(@PathVariable(name = "id") Long id, @RequestBody @Valid Address address){
    return addressService.add(address, id);
  }

  @PutMapping("/update/{id}")
  @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
  public Address updateAddress(@PathVariable(name = "id") Long id, @RequestBody @Valid Address address){
    return addressService.update(address, id);
  }

  @DeleteMapping("/delete/{id}")
  @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
  public void deleteAddress(@PathVariable(name = "id") Long id){
    addressService.delete(id);
  }

}
