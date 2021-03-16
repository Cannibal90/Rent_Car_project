package com.projekt.cannibal.car_rent.service.helpers;

import com.projekt.cannibal.car_rent.dao.helpers.CarBrandDao;
import com.projekt.cannibal.car_rent.model.helpers.CarBrand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarBrandService {

    @Autowired
    private CarBrandDao carBrandDao;

    public List<CarBrand> findAll(){
        return carBrandDao.findAll();
    }

    public Optional<CarBrand> findById(Long id){
        return carBrandDao.findById(id);
    }

    public Optional<CarBrand> findByBrandName(String name){
        return carBrandDao.findByBrandName(name);
    }

    public CarBrand add(CarBrand carBrand){
        return carBrandDao.save(carBrand);
    }

    public CarBrand upadate(CarBrand carBrand){
        //Optional<CarBrand> carBrandToUpdate = carBrandDao.findById(carBrand.getId());
        return carBrandDao.save(carBrand);
    }

    public void delete(CarBrand carBrand){
        carBrandDao.delete(carBrand);
    }

}
