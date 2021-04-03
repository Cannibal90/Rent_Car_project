package com.projekt.cannibal.car_rent.service;

import com.projekt.cannibal.car_rent.dao.CarDao;
import com.projekt.cannibal.car_rent.dao.OrderDao;
import com.projekt.cannibal.car_rent.dao.PaymentDao;
import com.projekt.cannibal.car_rent.dao.UserDao;
import com.projekt.cannibal.car_rent.exceptions.ApiNoFoundResourceException;
import com.projekt.cannibal.car_rent.helpers.PaymentType;
import com.projekt.cannibal.car_rent.model.Car;
import com.projekt.cannibal.car_rent.model.Order;
import com.projekt.cannibal.car_rent.model.Payment;
import com.projekt.cannibal.car_rent.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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

    public List<Order> findByUser(Long userId){
        Optional<User> userInDb = userDao.findById(userId);
        if(userInDb.isEmpty())
            throw new ApiNoFoundResourceException("User not found");
        return orderDao.findByUser(userInDb.get());
    }

    public Order findById(Long id){
        Optional<Order> orderInDb = orderDao.findById(id);
        if(orderInDb.isEmpty())
            throw new ApiNoFoundResourceException("Order not found");
        return orderInDb.get();
    }

    //TODO do nowy payment, cos z tym localdate
    public Order addOrder(Order order, Long userId){
        Optional<User> userInDb = userDao.findById(userId);
        if(userInDb.isEmpty())
            throw new ApiNoFoundResourceException("User not found");
        order.addUser(userInDb.get());
        Payment payment = new Payment(PaymentType.CASH, 0, LocalDate.now());
        paymentDao.save(payment);
        order.addPayment(payment);
        return orderDao.save(order);
    }

    public Order addCarsToOrder(Long orderId, Long carId){
        Optional<Order> orderInDb = orderDao.findById(orderId);
        if(orderInDb.isEmpty())
            throw new ApiNoFoundResourceException("Order not found");

        Optional<Car> carInDb = carDao.findById(carId);
        if(carInDb.isEmpty())
            throw new ApiNoFoundResourceException("Car not found");

        Payment payment = orderInDb.get().getPayment();
        Double price = carInDb.get().getPrice() + payment.getAmount();
        payment.setAmount(price);
        orderInDb.get().setPayment(payment);
        carInDb.get().getOrders().add(orderInDb.get());
        orderInDb.get().getCars().add(carInDb.get());
        return orderDao.save(orderInDb.get());
    }

    public Order update(Order order, Long orderId){
        Optional<Order> orderInDb = orderDao.findById(orderId);
        if(orderInDb.isEmpty())
            throw new ApiNoFoundResourceException("Order not found");
        return orderDao.save(order);
    }

    public void delete(Long orderId){
        Optional<Order> orderInDb = orderDao.findById(orderId);
        if(orderInDb.isEmpty())
            throw new ApiNoFoundResourceException("Order not found");

        orderDao.delete(orderInDb.get());
    }
}
