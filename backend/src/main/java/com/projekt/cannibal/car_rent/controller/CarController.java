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
    public List<Car> getAll(@LoggedInUser AppUser appUser){
        System.out.println("userId: " + appUser.getId());
        return carService.findAll();
    }

    @PostMapping("/add")
    public Car add(@RequestBody Car car, @LoggedInUser AppUser appUser){
    System.out.println("userId: " + appUser.getId());
        return carService.add(car);
    }

    @PutMapping("/update/{id}")
    public Car update(@RequestBody Car car, @PathVariable(name = "id") Long id){
        return carService.update(car, id);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable(name = "id") Long id){
        carService.delete(id);
    }
}
