package com.projekt.cannibal.car_rent.service.helpers;

import com.projekt.cannibal.car_rent.dao.helpers.CarBrandDao;
import com.projekt.cannibal.car_rent.exceptions.ApiNoFoundResourceException;
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

    public CarBrand findById(Long id){
        Optional<CarBrand> carBrandInDb = carBrandDao.findById(id);
        if(carBrandInDb.isEmpty())
            throw new ApiNoFoundResourceException("CarBrand not found");
        return carBrandInDb.get();
    }

    public CarBrand findByBrandName(String name){
        Optional<CarBrand> carBrandInDb = carBrandDao.findByBrandName(name);
        if(carBrandInDb.isEmpty())
            throw new ApiNoFoundResourceException("CarBrand not found");
        return carBrandInDb.get();
    }

    public CarBrand add(CarBrand carBrand){
        //TODO: sprawdzic jak z walidacja - unique
        return carBrandDao.save(carBrand);
    }

    public CarBrand upadate(CarBrand carBrand, Long id){
        Optional<CarBrand> carBrandInDb = carBrandDao.findById(id);
        if(carBrandInDb.isEmpty())
            throw new ApiNoFoundResourceException("CarBrand not found");
        carBrand.setId(id);
        return carBrandDao.save(carBrand);
    }

    public void delete(Long id){
        //TODO: usuwanie samochodow
        Optional<CarBrand> carBrandInDb = carBrandDao.findById(id);
        if(carBrandInDb.isEmpty())
            throw new ApiNoFoundResourceException("CarBrand not found");
        carBrandDao.delete(carBrandInDb.get());
    }

}
