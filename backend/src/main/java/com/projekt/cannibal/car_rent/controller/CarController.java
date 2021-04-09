package com.projekt.cannibal.car_rent.controller;

import com.projekt.cannibal.car_rent.configuration.AppUser;
import com.projekt.cannibal.car_rent.configuration.LoggedInUser;
import com.projekt.cannibal.car_rent.dao.helpers.CarBrandDao;
import com.projekt.cannibal.car_rent.model.Car;
import com.projekt.cannibal.car_rent.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("api/car")
public class CarController {

    @Autowired
    private CarService carService;


    @GetMapping("/all")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    public List<Car> getAll(){
        return carService.findAll();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    public Car getCarById(@PathVariable(name = "id") Long id){
        return carService.findById(id);
    }

    @PostMapping("/add")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Car add(@Valid @RequestBody Car car){
        return carService.add(car);
    }

    @PutMapping("/update/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Car update(@Valid @RequestBody Car car, @PathVariable(name = "id") Long id){

        return carService.update(car, id);
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void delete(@PathVariable(name = "id") Long id){
        carService.delete(id);
    }
}
