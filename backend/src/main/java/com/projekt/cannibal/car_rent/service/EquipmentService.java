package com.projekt.cannibal.car_rent.service;

import com.projekt.cannibal.car_rent.dao.CarDao;
import com.projekt.cannibal.car_rent.dao.EquipmentDao;
import com.projekt.cannibal.car_rent.model.Car;
import com.projekt.cannibal.car_rent.model.Equipment;
import liquibase.pro.packaged.E;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EquipmentService {

    @Autowired
    private EquipmentDao equipmentDao;

    @Autowired
    private CarDao carDao;

    public List<Equipment> findAll(){
        return equipmentDao.findAll();
    }

    public Optional<Equipment> findById(Long id){
        return equipmentDao.findById(id);
    }

    public Equipment add(Equipment equipment){
        return equipmentDao.save(equipment);
    }

    public Equipment update(Equipment equipment){
        return  equipmentDao.save(equipment);
    }

    public void delete(Equipment equipment){
        Optional<Car> car = carDao.findById(equipment.getCar().getId());
        if(car.isPresent()){
            car.get().setEquipment(null);
            carDao.save(car.get());
        }
        equipmentDao.delete(equipment);

    }


}
