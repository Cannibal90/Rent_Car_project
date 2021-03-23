package com.projekt.cannibal.car_rent.service;

import com.projekt.cannibal.car_rent.dao.AddressDao;
import com.projekt.cannibal.car_rent.dao.UserDao;
import com.projekt.cannibal.car_rent.exceptions.ApiNoFoundResourceException;
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

    public List<User> findAll(){
        return userDao.findAll();
    }

    public User findById(Long id){
        Optional<User> userInDB = userDao.findById(id);
        if(userInDB.isEmpty()){
            throw new ApiNoFoundResourceException("User not found");
        }
        return userInDB.get();
    }

    public User add(User user){
        String encodedPassword = this.passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        return userDao.save(user);
    }

    public User update(Long id, User user){
        //TODO: sprawdzic czy nie ma takiego samego emaila i username
        Optional<User> userInDb = userDao.findById(id);
        if(userInDb.isEmpty()){
            throw new ApiNoFoundResourceException("User not found");
        }
        user.setId(id);
        return userDao.save(user);
    }

    public User deleteUser(long id){
        Optional<User> userInDB = userDao.findById(id);
        if(userInDB.isEmpty()){
            throw new ApiNoFoundResourceException("User not found");
        }
        //TODO: usuwanie addresow i orderow
        userDao.delete(userInDB.get());
        return  userInDB.get();
    }

    public Optional<User> findByUsername(String username){
        return userDao.findByUsername(username);
    }

    public Optional<User> findByEmail(String email){
        return userDao.findByEmail(email);
    }

}
