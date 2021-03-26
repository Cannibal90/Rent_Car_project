package com.projekt.cannibal.car_rent.controller;

import com.projekt.cannibal.car_rent.configuration.AppUser;
import com.projekt.cannibal.car_rent.configuration.LoggedInUser;
import com.projekt.cannibal.car_rent.model.Car;
import com.projekt.cannibal.car_rent.model.Order;
import com.projekt.cannibal.car_rent.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/all")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Order> getAll(){
        return orderService.findAll();
    }

    @PostMapping("/add")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    public Order addOrder(@RequestBody Order order, @LoggedInUser AppUser appUser){
        return orderService.addOrder(order, appUser.getId());
    }

    @PutMapping("/update/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    public Order updateOrder(@PathVariable(name = "id") Long id, @RequestBody Order order){
        return orderService.update(order, id);
    }

    //TODO: przemyslec jak dodawac, trzeba chyba zrobic CarDTO
    @PutMapping("/update/addcar/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    public Order addCarToOrder(@PathVariable(name = "id") Long orderId, @RequestBody Car car){
        return orderService.addCarsToOrder(orderId,car.getId());
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void delete(@PathVariable(name = "id") Long id){
        orderService.delete(id);
    }

}
