package com.projekt.cannibal.car_rent.serice;

import com.projekt.cannibal.car_rent.dao.CarDao;
import com.projekt.cannibal.car_rent.model.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService {

    @Autowired
    private CarDao carDao;

    public List<Car> findAll(){
        return carDao.findAll();
    }

    public Optional<Car> findById(Long id){
        return carDao.findById(id);
    }

    public Car add(Car car){
        return  carDao.save(car);
    }

    public void delete(Car car){
        carDao.delete(car);
    }

}
