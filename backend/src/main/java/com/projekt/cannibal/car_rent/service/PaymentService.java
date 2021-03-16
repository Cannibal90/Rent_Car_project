package com.projekt.cannibal.car_rent.service;

import com.projekt.cannibal.car_rent.dao.OrderDao;
import com.projekt.cannibal.car_rent.dao.PaymentDao;
import com.projekt.cannibal.car_rent.model.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Access;
import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentDao paymentDao;
    @Autowired
    private OrderDao orderDao;

    public List<Payment> findAll(){
        return paymentDao.findAll();
    }

    public Optional<Payment> findById(Long id){
        return paymentDao.findById(id);
    }

    public Payment add(Payment payment){
        return paymentDao.save(payment);
    }

    public Payment update(Payment payment){
        return paymentDao.save(payment);
    }

    public void delete(Payment payment){
        paymentDao.delete(payment);
    }
}
