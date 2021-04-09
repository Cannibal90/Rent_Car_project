import { useEffect, useState } from "react";
import styled from "styled-components";
import { CarCard } from "../../components/carCard";
import { getAllCars } from "../../_carFunctions";

const CarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10%;
`;

const CarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  //moze byc space between
  margin: 0 0;
  flex-wrap: wrap; //tutaj nastepuje przeniesienie do nowej lini
`;

export function Cars(props) {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    getAllCars().then((res) => setCarList(res));
  }, []);

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
            urls={car.url}
            power={car.power}
            disabled={true}
          />
        ))}
      </CarWrapper>
    </CarContainer>
  );
}
