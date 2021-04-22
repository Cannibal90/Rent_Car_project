package com.projekt.cannibal.car_rent.dao;

import com.projekt.cannibal.car_rent.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface CarDao extends JpaRepository<Car, Long> {

    @Query(value = "SELECT * FROM car Inner Join car_brand on car.brand_id = car_brand.id WHERE car.availability_status!=2 and (model LIKE %:search% Or car_brand.brand_name LIKE %:search%)", nativeQuery = true)
    Page<Car> findByModelOrBrand(@Param("search")String search, Pageable page);
}
