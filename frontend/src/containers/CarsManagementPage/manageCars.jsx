import { ContentContainer, Title } from "../../components/Cards";
import styled from "styled-components";
import { Button } from "../../components/button";
import { CarCard } from "../../components/carCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CarsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10%;
`;
const CarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1%;
  z-index: 1;
`;

const CarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0;
  flex-wrap: wrap; //tutaj nastepuje przeniesienie do nowej lini
`;

export function ManageCars(props) {
  const [editMode, setEditMode] = useState(true);
  const [disable, setDisable] = useState(true);

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

  var changeMode = function () {
    setEditMode(!editMode);
    setDisable(!disable);
  };

  var handleDelete = function (car) {
    console.log("delete " + car.id);
    axios
      .delete("http://localhost:8080/api/car/delete/" + car.id, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json ",
        },
      })
      .then((response) => {
        console.log("Response: ", response.data);
        window.location.reload();
        //TODO: usunac zdjecie
      })
      .catch((error) => {
        console.log("Error: ", error.response);
      });
  };

  return (
    <CarsContainer>
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
              disabled={disable ? true : ""}
              handler={() => {
                handleDelete(car);
              }}
              linkto={"/manage/cars/update/" + car.id}
            />
          ))}
        </CarWrapper>
      </CarContainer>
    </CarsContainer>
  );
}
