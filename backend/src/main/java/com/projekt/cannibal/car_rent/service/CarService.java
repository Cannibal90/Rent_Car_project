package com.projekt.cannibal.car_rent.service;

import com.projekt.cannibal.car_rent.dao.AvailabilityDao;
import com.projekt.cannibal.car_rent.dao.CarDao;
import com.projekt.cannibal.car_rent.dao.EquipmentDao;
import com.projekt.cannibal.car_rent.dao.helpers.CarBrandDao;
import com.projekt.cannibal.car_rent.dao.helpers.FuelDao;
import com.projekt.cannibal.car_rent.model.Car;
import com.projekt.cannibal.car_rent.model.helpers.Fuel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService {

    @Autowired
    private CarDao carDao;
    @Autowired
    private EquipmentDao equipmentDao;
    @Autowired
    private FuelDao fuelDao;
    @Autowired
    private CarBrandDao carBrandDao;
    @Autowired
    private AvailabilityDao availabilityDao;

    public List<Car> findAll(){
        return carDao.findAll();
    }

    public Optional<Car> findById(Long id){
        return carDao.findById(id);
    }

    public Car add(Car car){
        Fuel fuel =  fuelDao.findByFuelType(car.getFuel().getFuelType()).get();

        car.setFuel(fuel);
    System.out.printf("availability: " + car.getAvailability());
        return  carDao.save(car);
    }

    public void delete(Car car){
        carDao.delete(car);
    }

}
