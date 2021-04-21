package com.projekt.cannibal.car_rent.dao.helpers;


import com.projekt.cannibal.car_rent.model.helpers.CarBrand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.List;
import java.util.Optional;

public interface CarBrandDao extends JpaRepository<CarBrand, Long> {
    Optional<CarBrand> findByBrandName(String name);

    @Query(value = "SELECT brand_name FROM car_brand", nativeQuery = true)
    List<String> findAllByBrandName();
}
