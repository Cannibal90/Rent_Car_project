package com.projekt.cannibal.car_rent.controller;

import com.projekt.cannibal.car_rent.model.helpers.CarBrand;
import com.projekt.cannibal.car_rent.service.helpers.CarBrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("api/carBrand")
public class CarBrandController {

    @Autowired
    private CarBrandService carBrandService;


    @GetMapping("/all")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    public List<String> getAll(){
        return carBrandService.findAllNames();
    }

   }

