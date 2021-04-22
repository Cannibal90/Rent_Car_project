import { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import styled from "styled-components";
import { CarCard } from "../../components/carCard";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Input,
  CommonContainer,
  WidthContainer,
  CarWrapper,
} from "../../components/Cards";

import { getAllCarsByName } from "../../_carFunctions";

const SearchBarContainer = styled.div`
  width: 30%;
  display: flex;
  float: right;
  min-height: 50px;
  margin: 1%;
`;

export function Cars(props) {
  const [carList, setCarList] = useState([]);

  const [search, setSearch] = useState("");

  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    getAllCarsByName(activePage, itemsPerPage, search).then((res) => {
      setTotalPages(res.totalPages);
      setActivePage(res.number);
      setItemsPerPage(res.size);
      setCarList(res.content);
    });
  }, [activePage, itemsPerPage, search]);

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
    <WidthContainer>
      <SearchBarContainer>
        <Input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </SearchBarContainer>
      <CommonContainer>
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
              status={car.availabilityStatus}
              power={car.power}
              disabled={true}
            />
          ))}
        </CarWrapper>
      </CommonContainer>
      <Pagination style={{ justifyContent: "center" }} size="lg">
        {items}
      </Pagination>
    </WidthContainer>
  );
}
