package com.projekt.cannibal.car_rent.dao;

import com.projekt.cannibal.car_rent.model.Address;
import com.projekt.cannibal.car_rent.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface AddressDao extends JpaRepository<Address, Long> {

    Page<Address> findByUser(User user, Pageable page);
}
