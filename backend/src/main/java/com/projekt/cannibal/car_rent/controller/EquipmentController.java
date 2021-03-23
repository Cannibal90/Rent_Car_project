package com.projekt.cannibal.car_rent.controller;

import com.projekt.cannibal.car_rent.dao.EquipmentDao;
import com.projekt.cannibal.car_rent.model.Equipment;
import com.projekt.cannibal.car_rent.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/equipment")
public class EquipmentController {

    @Autowired
    private EquipmentService equipmentService;

    @GetMapping("all")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Equipment> getAll(){
        return equipmentService.findAll();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    public Equipment getEquipmentById(@PathVariable(name = "id") Long id){
        return equipmentService.findById(id);
    }

    @PutMapping("/update/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    public Equipment updateEquipment(@PathVariable(name = "id") Long id, @RequestBody Equipment equipment){
        return equipmentService.update(equipment, id);
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    public void deleteEquipment(@PathVariable(name = "id") Long id){
        equipmentService.delete(id);
    }
}
