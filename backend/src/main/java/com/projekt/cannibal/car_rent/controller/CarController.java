package com.projekt.cannibal.car_rent.controller;

import com.projekt.cannibal.car_rent.configuration.AppUser;
import com.projekt.cannibal.car_rent.configuration.LoggedInUser;
import com.projekt.cannibal.car_rent.model.Car;
import com.projekt.cannibal.car_rent.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/car")
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping("/all")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Car> getAll(){
        return carService.findAll();
    }

    @PostMapping("/add")
    public Car add(@RequestBody Car car, @LoggedInUser AppUser appUser){
        return carService.add(car);
    }

    @PutMapping("/update")
    public Car update(@RequestBody Car car){
        return carService.update(car);
    }
}
