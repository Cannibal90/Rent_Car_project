package com.projekt.cannibal.car_rent.dao.helpers;

import com.projekt.cannibal.car_rent.model.Address;
import com.projekt.cannibal.car_rent.model.helpers.CarBrand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarBrandDao extends JpaRepository<CarBrand, Long> {
}