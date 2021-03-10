package com.projekt.cannibal.car_rent.service;

import com.projekt.cannibal.car_rent.dao.CarDao;
import com.projekt.cannibal.car_rent.dao.helpers.CarBrandDao;

import com.projekt.cannibal.car_rent.model.Car;

import com.projekt.cannibal.car_rent.model.helpers.CarBrand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class CarService {

    @Autowired
    private CarDao carDao;
    @Autowired
    private CarBrandDao carBrandDao;

    public List<Car> findAll(){
        return carDao.findAll();
    }

    public Optional<Car> findById(Long id){
        return carDao.findById(id);
    }

    public Car add(Car car){

        CarBrand carBrand = carBrandDao.findByBrandName(car.getBrand().getBrandName()).get();
        carBrand.addCar(car);
        car.getEquipment().setCar(car);
        return  carDao.save(car);
    }

    public Car update(Car car){
        Optional<Car> carToUpdate = carDao.findById(car.getId());
        if(carToUpdate.isPresent() && !carToUpdate.get().getBrand().equals(car.getBrand())){
            carToUpdate.get().getBrand().getCars().remove(carToUpdate);
        }
        CarBrand carBrand = carBrandDao.findByBrandName(car.getBrand().getBrandName()).get();
        carBrand.addCar(car);
        return carDao.save(car);

    }
    public void delete(Car car){
        car.getBrand().getCars().remove(car);
        carDao.delete(car);
    }

}
