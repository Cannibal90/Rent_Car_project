import { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import styled from "styled-components";
import { CarCard } from "../../components/carCard";
import "bootstrap/dist/css/bootstrap.min.css";
//TODO

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

const TopContainer = styled.div`
  width: 100%;
`;

export function Cars(props) {
  const [carList, setCarList] = useState([]);

  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  // const [totalElements, setTotalElements] = useState(0);

  useEffect(() => {
    getAllCars(activePage, itemsPerPage).then((res) => {
      setTotalPages(res.totalPages);
      setActivePage(res.number);
      setItemsPerPage(res.size);
      setCarList(res.content);

      //setTotalElements(res.totalElements);
    });
  }, [activePage, itemsPerPage]);

  let items = [];
  for (let number = 0; number < totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number + 1}
        active={number === activePage}
        onClick={() => {
          setActivePage(number);
        }}
      >
        {number + 1}
      </Pagination.Item>
    );
  }

  return (
    <TopContainer>
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

      <Pagination style={{ justifyContent: "center" }} size="lg">
        {items}
      </Pagination>
    </TopContainer>
  );
}
