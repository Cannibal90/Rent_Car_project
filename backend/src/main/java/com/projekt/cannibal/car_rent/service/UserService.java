package com.projekt.cannibal.car_rent.service;

import com.projekt.cannibal.car_rent.dao.AddressDao;
import com.projekt.cannibal.car_rent.dao.UserDao;
import com.projekt.cannibal.car_rent.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private AddressDao addressDao;

    public List<User> findAll(){
        return userDao.findAll();
    }

    public Optional<User> findById(Long id){
        return userDao.findById(id);
    }

    public User add(User user){
        return user;
    }

    public User update(User user){
        return user;
    }

}
