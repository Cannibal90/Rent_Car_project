package com.projekt.cannibal.car_rent.service;

import com.projekt.cannibal.car_rent.dao.AddressDao;
import com.projekt.cannibal.car_rent.dao.UserDao;
import com.projekt.cannibal.car_rent.model.Address;
import com.projekt.cannibal.car_rent.model.Car;
import com.projekt.cannibal.car_rent.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AddressService {

    @Autowired
    private AddressDao addressDao;

    @Autowired
    private UserDao userDao;


    public List<Address> findAll(){
        return addressDao.findAll();
    }

    public Optional<Address> findById(Long id){
        return addressDao.findById(id);
    }

    public Address add(Address address){
        return addressDao.save(address);
    }

    public Address update(Address address){
        return addressDao.save(address);
    }

    public void delete(Address address){
        User user = address.getUser();
        Optional<User> userToModify = userDao.findById(user.getId());
        if(userToModify.isPresent()){
            user.getAddresses().remove(address);
        }
        addressDao.delete(address);
    }
}
