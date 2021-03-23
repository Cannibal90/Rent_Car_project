package com.projekt.cannibal.car_rent.service;

import com.projekt.cannibal.car_rent.dao.OrderDao;
import com.projekt.cannibal.car_rent.dao.PaymentDao;
import com.projekt.cannibal.car_rent.exceptions.ApiNoFoundResourceException;
import com.projekt.cannibal.car_rent.model.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Access;
import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentDao paymentDao;


    public List<Payment> findAll(){
        return paymentDao.findAll();
    }

    public Payment findById(Long id){
        Optional<Payment> paymentInDB = paymentDao.findById(id);
        if(paymentInDB.isEmpty())
            throw new ApiNoFoundResourceException("Payment not found");
        return paymentInDB.get();
    }

    public Payment add(Payment payment){
        return paymentDao.save(payment);
    }

    public Payment update(Payment payment, Long id){
        Optional<Payment> paymentInDb = paymentDao.findById(id);
        if(paymentInDb.isEmpty())
            throw new ApiNoFoundResourceException("Payment not found");
        payment.setId(id);
        return paymentDao.save(payment);
    }

    public void delete(Long id){
        //TODO: usuwanie z order
        Optional<Payment> paymentInDb = paymentDao.findById(id);
        if(paymentInDb.isEmpty())
            throw new ApiNoFoundResourceException("Payment not found");
        paymentDao.delete(paymentInDb.get());
    }
}
