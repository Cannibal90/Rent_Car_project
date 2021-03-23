package com.projekt.cannibal.car_rent.service;

import com.projekt.cannibal.car_rent.dao.AddressDao;
import com.projekt.cannibal.car_rent.dao.UserDao;
import com.projekt.cannibal.car_rent.exceptions.ApiNoFoundResourceException;
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

    public Address findAddressById(Long id){
        Optional<Address> addressInDB = addressDao.findById(id);
        if(addressInDB.isEmpty()){
            throw new ApiNoFoundResourceException("Address not found");
        }
        return addressInDB.get();
    }

    public List<Address> findByUserId(Long id){
        Optional<User> userInDb = userDao.findById(id);
        if(userInDb.isEmpty()){
            throw new ApiNoFoundResourceException("User not found");
        }
        return addressDao.findByUser(userInDb.get());
    }

    public Address add(Address address, Long userId){
        Optional<User> userInDB = userDao.findById(userId);
        if(userInDB.isEmpty()){
            throw new ApiNoFoundResourceException("User not found");
        }
        address.addUser(userInDB.get());
        return addressDao.save(address);
    }

    public Address update(Address address, Long addressId){
        Optional<Address> addressInDB = addressDao.findById(addressId);
        if(addressInDB.isEmpty())
            throw new ApiNoFoundResourceException("Address not found");
        address.setId(addressInDB.get().getId());
        return addressDao.save(address);
    }

    public void delete(Long id){
        Optional<Address> addressInDB = addressDao.findById(id);
        if(addressInDB.isEmpty())
            throw new ApiNoFoundResourceException("Address not found");
        User user = addressInDB.get().getUser();
        user.getAddresses().remove(addressInDB.get());
        Optional<User> userToModify = userDao.findById(user.getId());
        if(userToModify.isEmpty())
            throw new ApiNoFoundResourceException("User not found");
        userDao.save(user);
        addressDao.delete(addressInDB.get());
    }
}
