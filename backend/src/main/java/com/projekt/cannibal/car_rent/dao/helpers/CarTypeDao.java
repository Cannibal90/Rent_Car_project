package com.projekt.cannibal.car_rent.dao.helpers;

import com.projekt.cannibal.car_rent.model.Address;
import com.projekt.cannibal.car_rent.model.helpers.CarType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarTypeDao extends JpaRepository<CarType, Long> {
}
