package com.projekt.cannibal.car_rent.dao.helpers;

import com.projekt.cannibal.car_rent.model.Address;
import com.projekt.cannibal.car_rent.model.helpers.Fuel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FuelDao extends JpaRepository<Fuel, Long> {
     Optional<Fuel> findByFuelType(String fuelType);
}
