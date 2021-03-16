package com.projekt.cannibal.car_rent.service;

import com.projekt.cannibal.car_rent.dao.CarDao;
import com.projekt.cannibal.car_rent.dao.OrderDao;
import com.projekt.cannibal.car_rent.dao.PaymentDao;
import com.projekt.cannibal.car_rent.dao.UserDao;
import com.projekt.cannibal.car_rent.model.Order;
import com.projekt.cannibal.car_rent.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderDao orderDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private CarDao carDao;

    @Autowired
    private PaymentDao paymentDao;

    public List<Order> findAll(){
        return orderDao.findAll();
    }

    public List<Order> findByUser(User user){
        return orderDao.findByUser(user);
    }

    public Optional<Order> findById(Long id){
        return orderDao.findById(id);
    }

    //TODO do przemyslenia arg
    public Order add(Order order){
        return order;
    }

    //TODO update i delete
    public Order update(Order order){
        return order;
    }

    public void delete(Order order){
        orderDao.delete(order);
    }
}
