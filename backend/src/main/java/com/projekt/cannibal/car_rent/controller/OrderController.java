package com.projekt.cannibal.car_rent.controller;

import com.projekt.cannibal.car_rent.configuration.AppUser;
import com.projekt.cannibal.car_rent.configuration.LoggedInUser;
import com.projekt.cannibal.car_rent.dto.OrderDTO;
import com.projekt.cannibal.car_rent.model.Car;
import com.projekt.cannibal.car_rent.model.Order;
import com.projekt.cannibal.car_rent.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("api/order")
public class OrderController {

  @Autowired private OrderService orderService;

  @GetMapping("/all")
  @PreAuthorize("hasRole('ROLE_ADMIN')")
  public List<Order> getAll() {
    return orderService.findAll();
  }

  @GetMapping("/history/{id}")
  @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
  public List<Order> getUserHistory(@PathVariable(name = "id") Long id) {
    return orderService.getUserHistory(id);
  }

  @GetMapping("/basket/{id}")
  @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
  public Order getUserBasket(@PathVariable(name = "id") Long id) {
    return orderService.getUserBasket(id);
  }

  @PostMapping("/add")
  @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
  public Order addOrder(@Valid @RequestBody Order order, @LoggedInUser AppUser appUser) {
    return orderService.addOrder(order, appUser.getId());
  }

  @PutMapping("/update/{id}")
  @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
  public Order updateOrder(@PathVariable(name = "id") Long id, @Valid  @RequestBody Order order) {
    return orderService.update(order, id);
  }

  @PutMapping("/addCar")
  @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
  public Order addCarToOrder(@Valid @RequestBody OrderDTO orderDTO) {
    return orderService.addCarsToOrder(orderDTO);
  }

  @DeleteMapping("/delete/{id}")
  @PreAuthorize("hasRole('ROLE_ADMIN')")
  public void delete(@PathVariable(name = "id") Long id) {
    orderService.delete(id);
  }
}
