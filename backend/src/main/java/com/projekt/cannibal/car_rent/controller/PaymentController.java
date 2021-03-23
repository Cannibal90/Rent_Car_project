package com.projekt.cannibal.car_rent.controller;

import com.projekt.cannibal.car_rent.model.Payment;
import com.projekt.cannibal.car_rent.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @GetMapping("/all")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Payment> getAll(){
        return paymentService.findAll();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Payment getPaymentById(@PathVariable(name = "id") Long id){
        return paymentService.findById(id);
    }

    @PostMapping("/add")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Payment addPayment(@RequestBody Payment payment){
        return paymentService.add(payment);
    }

    @PutMapping("/update/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Payment updatePayment(@PathVariable(name = "id") Long id, Payment payment){
        return paymentService.update(payment, id);
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void delete(@PathVariable(name = "id") Long id){
        paymentService.delete(id);
    }

}
