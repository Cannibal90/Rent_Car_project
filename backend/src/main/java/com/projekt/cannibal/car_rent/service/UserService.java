package com.projekt.cannibal.car_rent.service;

import com.projekt.cannibal.car_rent.dao.AddressDao;
import com.projekt.cannibal.car_rent.dao.UserDao;
import com.projekt.cannibal.car_rent.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;

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
        String encodedPassword = this.passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        return userDao.save(user);
    }

    public User update(User user){
        return user;
    }

    public Optional<User> findByUsername(String username){
        return userDao.findByUsername(username);
    }

    public Optional<User> findByEmail(String email){
        return userDao.findByEmail(email);
    }

    public void deleteUser(User user){
        userDao.delete(user);
    }

}
