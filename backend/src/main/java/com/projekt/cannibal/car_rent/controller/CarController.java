package com.projekt.cannibal.car_rent.controller;

import com.projekt.cannibal.car_rent.model.Car;
import com.projekt.cannibal.car_rent.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/car")
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping("/all")
    public List<Car> getAll(){
        return carService.findAll();
    }

    @PostMapping("add")
    public Car add(@RequestBody Car car){
        return carService.add(car);
    }
}
