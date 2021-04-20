package com.projekt.cannibal.car_rent.service;

import com.projekt.cannibal.car_rent.dao.CarDao;
import com.projekt.cannibal.car_rent.dao.EquipmentDao;
import com.projekt.cannibal.car_rent.exceptions.ApiNoFoundResourceException;
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

    public Equipment findById(Long id){
        Optional<Equipment> equipmentInDb = equipmentDao.findById(id);
        if(equipmentInDb.isEmpty())
            throw new ApiNoFoundResourceException("Equipment not found");
        return equipmentInDb.get();
    }

    public Equipment add(Equipment equipment){
        return equipmentDao.save(equipment);
    }

    public Equipment update(Equipment equipment, Long id){
        Optional<Equipment> equipmentInDb = equipmentDao.findById(id);
        if(equipmentInDb.isEmpty())
            throw new ApiNoFoundResourceException("Equipment not found");
        equipment.setId(id);
        return  equipmentDao.save(equipment);
    }

    public void delete(Long id){
        Optional<Equipment> equipmentInDb = equipmentDao.findById(id);
        if(equipmentInDb.isEmpty())
            throw new ApiNoFoundResourceException("Equipment not found");
        equipmentDao.delete(equipmentInDb.get());
    }


}
