package com.projekt.cannibal.car_rent.model.helpers;

import com.projekt.cannibal.car_rent.model.Availability;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString
public class AvailabilityStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String Status;

    @OneToMany(mappedBy = "availabilityStatus")
    private List<Availability> availabilities = new ArrayList<>();
}
