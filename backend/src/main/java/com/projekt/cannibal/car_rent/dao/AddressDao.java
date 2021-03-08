package com.projekt.cannibal.car_rent.dao;

import com.projekt.cannibal.car_rent.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface AddressDao extends JpaRepository<Address, Long> {
}
