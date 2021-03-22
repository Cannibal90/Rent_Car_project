package com.projekt.cannibal.car_rent.controller;

import com.projekt.cannibal.car_rent.configuration.AppUser;
import com.projekt.cannibal.car_rent.configuration.LoggedInUser;
import com.projekt.cannibal.car_rent.helpers.Role;
import com.projekt.cannibal.car_rent.model.Address;
import com.projekt.cannibal.car_rent.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/address")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @GetMapping("/all")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Address> getAll(){
        return addressService.findAll();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    public Address findAddressById(@RequestParam(name = "id") long id, @LoggedInUser AppUser appUser){
        if(appUser.getRole().equals("ROLE_USER") && appUser.getId() != id){
            //TODO: powinno byc resposneEntity chyba
            return null;
        }
        Optional<Address> address = addressService.findById(id);
        return address.orElse(null);
    }

//    @PostMapping("/{id}")
//    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
//    public Address addAddressForUser(@RequestBody Address address, @LoggedInUser AppUser appUser){
//        if(appUser.getRole().equals("ROLE_USER") && appUser.getId() != id){
//            //TODO: powinno byc resposneEntity chyba
//            return null;
//        }
//    }


}
