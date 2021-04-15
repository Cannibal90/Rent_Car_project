package com.projekt.cannibal.car_rent.service;

import com.projekt.cannibal.car_rent.dao.CarDao;
import com.projekt.cannibal.car_rent.dao.EquipmentDao;
import com.projekt.cannibal.car_rent.dao.helpers.CarBrandDao;

import com.projekt.cannibal.car_rent.exceptions.ApiNoFoundResourceException;
import com.projekt.cannibal.car_rent.model.Car;

import com.projekt.cannibal.car_rent.model.Equipment;
import com.projekt.cannibal.car_rent.model.helpers.CarBrand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CarService {

    @Autowired
    private CarDao carDao;
    @Autowired
    private CarBrandDao carBrandDao;

    @Autowired
    private EquipmentDao equipmentDao;

//    public List<Car> findAll(){
//        return carDao.findAll();
//    }

    public Page<Car> findAll(Pageable page){
        return carDao.findAll(page);
    }

    public Page<Car> findAllByModel(String name, Pageable page){
        return carDao.findByModelOrBrand(name, page);
    }

    public Car findById(Long id){
        Optional<Car> carInDb = carDao.findById(id);
        if(carInDb.isEmpty())
            throw new ApiNoFoundResourceException("Car not found");
        return carInDb.get();
    }



    public Car add(Car car){
        Optional<CarBrand> carBrandInDb = carBrandDao.findByBrandName(car.getBrand().getBrandName());
        if(carBrandInDb.isEmpty())
            throw new ApiNoFoundResourceException("CarBrand not found");
        Equipment equipment = car.getEquipment();
        equipmentDao.save(equipment);
        car.addCarBrand(carBrandInDb.get());
        car.addEquipment(equipment);
        return  carDao.save(car);
    }

    public Car update(Car car, Long carId){
        //TODO: sprawdzic jak z carbrand po update
        Optional<Car> carInDb = carDao.findById(carId);
        if(carInDb.isEmpty()){
            throw new ApiNoFoundResourceException("Car not found");
        }
        car.setId(carId);
        return add(car);

    }
    public void delete(Long id){
        Optional<Car> carInDb = carDao.findById(id);
        if(carInDb.isEmpty()){
            throw new ApiNoFoundResourceException("Car not found");
        }
        carDao.delete(carInDb.get());
    }

}
