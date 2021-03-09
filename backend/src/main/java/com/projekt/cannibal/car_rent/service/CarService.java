package com.projekt.cannibal.car_rent.service;

import com.projekt.cannibal.car_rent.dao.AvailabilityDao;
import com.projekt.cannibal.car_rent.dao.CarDao;
import com.projekt.cannibal.car_rent.dao.EquipmentDao;
import com.projekt.cannibal.car_rent.dao.helpers.CarBrandDao;

import com.projekt.cannibal.car_rent.model.Availability;
import com.projekt.cannibal.car_rent.model.Car;

import com.projekt.cannibal.car_rent.model.helpers.CarBrand;
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

        CarBrand carBrand = carBrandDao.findByBrandName(car.getBrand().getBrandName()).get();
        carBrand.addCar(car);
        car.getAvailability().setCar(car);
        car.getEquipment().setCar(car);
        return  carDao.save(car);
    }

    public void delete(Car car){
        carDao.delete(car);
    }

}
