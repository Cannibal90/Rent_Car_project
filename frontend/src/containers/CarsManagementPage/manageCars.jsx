import {
  ContentContainer,
  Title,
  CommonContainer,
  WidthContainer,
  CarWrapper,
  CarContainer,
} from "../../components/Cards";
import { Button } from "../../components/button";
import { CarCard } from "../../components/carCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteCar, getAllCars } from "../../_carFunctions";
import { useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

export function ManageCars(props) {
  const [editMode, setEditMode] = useState(true);
  const [disable, setDisable] = useState(true);
  const [carList, setCarList] = useState([]);

  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    getAllCars(activePage, itemsPerPage).then((res) => {
      setTotalPages(res.totalPages);
      setActivePage(res.number);
      setItemsPerPage(res.size);
      setCarList(res.content);
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

  var changeMode = function () {
    setEditMode(!editMode);
    setDisable(!disable);
  };

  var handleDelete = function (car) {
    deleteCar(car).then((res) => {
      window.location.reload();
    });
  };

  return (
    <WidthContainer>
      <CarContainer>
        <ContentContainer>
          <Title>Cars</Title>
        </ContentContainer>
        <ContentContainer>
          {editMode ? (
            <Button size={25} paddingH={3} paddingW={2} onClick={changeMode}>
              Delete Mode
            </Button>
          ) : (
            <Button size={25} paddingH={3} paddingW={2} onClick={changeMode}>
              Edit Mode
            </Button>
          )}
          <Link to="/manage/cars/add">
            <Button size={25} paddingH={3} paddingW={2}>
              Add new car
            </Button>
          </Link>
        </ContentContainer>
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
                disabled={disable ? true : ""}
                handler={() => {
                  handleDelete(car);
                }}
                linkto={"/manage/cars/update/" + car.id}
              />
            ))}
          </CarWrapper>
        </CommonContainer>
      </CarContainer>

      <Pagination style={{ justifyContent: "center" }} size="lg">
        {items}
      </Pagination>
    </WidthContainer>
  );
}
