package com.projekt.cannibal.car_rent.service;

import com.projekt.cannibal.car_rent.dao.CarDao;
import com.projekt.cannibal.car_rent.dao.OrderDao;
import com.projekt.cannibal.car_rent.dao.PaymentDao;
import com.projekt.cannibal.car_rent.dao.UserDao;
import com.projekt.cannibal.car_rent.dto.OrderDTO;
import com.projekt.cannibal.car_rent.exceptions.ApiNoFoundResourceException;
import com.projekt.cannibal.car_rent.helpers.AvailabilityStatus;
import com.projekt.cannibal.car_rent.helpers.OrderStatus;
import com.projekt.cannibal.car_rent.helpers.PaymentType;
import com.projekt.cannibal.car_rent.model.Car;
import com.projekt.cannibal.car_rent.model.Order;
import com.projekt.cannibal.car_rent.model.Payment;
import com.projekt.cannibal.car_rent.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

    public Page<Order> findAll(Pageable page){
        return orderDao.findAll(page);
    }

    public List<Order> findByUser(Long userId){
        Optional<User> userInDb = userDao.findById(userId);
        if(userInDb.isEmpty())
            throw new ApiNoFoundResourceException("User not found");
        return orderDao.findByUser(userInDb.get());
    }

    public Page<Order> getUserHistory(Long userId, Pageable page){
        Optional<User> userInDb = userDao.findById(userId);
        if(userInDb.isEmpty())
            throw new ApiNoFoundResourceException("User not found");
        return orderDao.findByUserAndStatusIsNot(userInDb.get(),OrderStatus.VERIFICATION, page);
    }

    public Order getUserBasket(Long userId){
        Optional<User> userInDb = userDao.findById(userId);
        if(userInDb.isEmpty())
            throw new ApiNoFoundResourceException("User not found");
        Optional<Order> orderInDb = orderDao.findByUser(userInDb.get())
                .stream()
                .filter(order -> order.getStatus().equals(OrderStatus.VERIFICATION))
                .findFirst();
        if(orderInDb.isEmpty())
            return null;
        return orderInDb.get();
//        return orderDao.findByUser(userInDb.get())
//                .stream()
//                .filter(order -> order.getStatus().equals(OrderStatus.VERIFICATION))
//                .collect(Collectors.toList());
    }

    public Order findById(Long id){
        Optional<Order> orderInDb = orderDao.findById(id);
        if(orderInDb.isEmpty())
            throw new ApiNoFoundResourceException("Order not found");
        return orderInDb.get();
    }

    public Order addOrder(Order order, Long userId){
        Optional<User> userInDb = userDao.findById(userId);
        if(userInDb.isEmpty())
            throw new ApiNoFoundResourceException("User not found");
        order.addUser(userInDb.get());
        Payment payment = new Payment(PaymentType.CASH, 0, LocalDate.now().plusDays(2));
        paymentDao.save(payment);
        order.addPayment(payment);
        order.setStatus(OrderStatus.VERIFICATION);
        return orderDao.save(order);
    }

    public Order addCarsToOrder(OrderDTO orderDTO){
        Optional<User> userInDb = userDao.findById(orderDTO.getUserId());
        if(userInDb.isEmpty())
            throw new ApiNoFoundResourceException("User not found");
        List<Order> userOrder = orderDao.findByUser(userInDb.get())
                .stream()
                .filter(order -> order.getStatus().equals(OrderStatus.VERIFICATION))
                .collect(Collectors.toList());

        Order orderInDb = null;
        if(userOrder.isEmpty()){
            orderInDb = addOrder(new Order(), orderDTO.getUserId());
        }
        else {
            orderInDb = userOrder.get(0);
        }

        Optional<Car> carInDb = carDao.findById(orderDTO.getCarToAdd().getId());
        if(carInDb.isEmpty())
            throw new ApiNoFoundResourceException("Car not found");
        carInDb.get().setAvailabilityStatus(AvailabilityStatus.OUT_OF_STOCK);
        Payment payment = orderInDb.getPayment();
        Double price = carInDb.get().getPrice() + payment.getAmount();
        payment.setAmount(price);
        orderInDb.setPayment(payment);
        orderInDb.addCar(carInDb.get());
        return orderDao.save(orderInDb);
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
