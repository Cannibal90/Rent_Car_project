package com.projekt.cannibal.car_rent.dao.helpers;

import com.projekt.cannibal.car_rent.model.Address;
import com.projekt.cannibal.car_rent.model.helpers.Gearbox;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GearboxDao extends JpaRepository<Gearbox, Long> {
}
