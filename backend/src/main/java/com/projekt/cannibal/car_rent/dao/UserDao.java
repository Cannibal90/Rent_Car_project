package com.projekt.cannibal.car_rent.dao;


import com.projekt.cannibal.car_rent.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface UserDao extends JpaRepository<User, Long> {
}
