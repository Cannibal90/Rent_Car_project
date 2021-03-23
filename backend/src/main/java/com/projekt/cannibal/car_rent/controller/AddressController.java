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

import java.util.List;
import java.util.Optional;

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
  @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROlE_USER')")
  public Address getAddressById(@PathVariable(name = "id") Long id){
    return addressService.findAddressById(id);
  }

//  @GetMapping("/id")
//  @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROlE_USER')")
//  public ResponseEntity<Address> getAddressById(
//      @PathVariable(name = "id") Long id, @LoggedInUser AppUser appUser) {
//    Optional<Address> addressInDB = addressService.findAddressById(id);
//    if (addressInDB.isEmpty()) {
//      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    } else if (appUser.getId() != addressInDB.get().getUser().getId()
//        && !appUser.getRole().equals(Role.ROLE_ADMIN.toString())) {
//      return new ResponseEntity<>(HttpStatus.FORBIDDEN);
//    }
//    return ResponseEntity.ok().body(addressInDB.get());
//  }

  @PostMapping("/id")
  public ResponseEntity<Address> saveAddress(@PathVariable(name = "id") Long id, @RequestBody Address address, @LoggedInUser AppUser appUser ){
      return ResponseEntity.ok().body(address);
  }

}
