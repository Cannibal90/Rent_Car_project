import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CarCard } from "../../components/carCard";

const CarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10%;
`;

const CarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 11%;
  flex-wrap: wrap; //tutaj nastepuje przeniesienie do nowej lini
`;

export function Cars(props) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const token = `Bearer ${user.token}`;
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/car/all", {
        headers: {
          Authorization: token,
          "Content-Type": "application/json ",
        },
      })
      .then((response) => {
        console.log("Response: ", response.data);
        setCarList(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error.response);
      });
  }, [token]);

  const images = require.context("../../images", true);
  return (
    <CarContainer>
      <CarWrapper>
        {carList.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            title={car.brand.brandName + " " + car.model}
            price={car.price}
            engine={car.engine}
            fuel={car.fuel}
            year={car.production_date}
            odometer={car.odometer}
            gearbox={car.equipment.gearbox}
            urls={images(`./${car.brand.brandName} ${car.model}.jpg`).default}
          />
        ))}
      </CarWrapper>
    </CarContainer>
  );
}
