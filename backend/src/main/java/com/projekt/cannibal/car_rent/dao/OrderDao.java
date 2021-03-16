package com.projekt.cannibal.car_rent.dao;


import com.projekt.cannibal.car_rent.model.Order;
import com.projekt.cannibal.car_rent.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface OrderDao extends JpaRepository<Order, Long> {

    public List<Order> findByUser(User user);
}
