//import axios from "axios";

import { Button } from "../../components/button";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { Link } from "react-router-dom";
import { InformationContent } from "./information";
import { useEffect, useState } from "react";
import { getSelectedCar } from "../../_carFunctions";
import { addCarToOrder } from "../../_ordersFunctions";

const TopContainer = styled.div`
  width: 100%;
  margin-bottom: 10%;
`;

const SelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-top: 4px;
  width: 60%;
  min-height: 50%;
  background-color: #fff;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.8);
`;

const CarGallery = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

const TitlePriceContainer = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: #576164;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 2%;
`;

const AccessibilityContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: #7f5ef5;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px 10%;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Title = styled.div`
  font-size: 26px;
  margin: 0;
  font-weight: 600;
  color: #fff;
`;

const Basic = styled.div`
  width: 100%;
  align-items: center;
  font-size: 46px;
  margin: 0;
  font-weight: 600;
  color: #000;
  text-decoration: underline;
`;

export function SelectedCar(props) {
  const [isLoading, setLoading] = useState(true);
  const { id } = props;
  const [car, setCar] = useState();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    getSelectedCar(id).then((res) => {
      setCar(res);
      setLoading(false);
      if (res.availabilityStatus === "Out of stock") {
        setDisabled(true);
      }
    });
  }, [id]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  var addToBasket = function () {
    addCarToOrder(car).then((res) => {
      window.location.reload();
    });
  };

  return (
    <TopContainer>
      <SelectedContainer>
        <CarGallery>
          <img src={car.url} alt="car" />
        </CarGallery>
      </SelectedContainer>
      <TitlePriceContainer>
        <AccessibilityContainer>
          <Title>{car.brand.brandName + " " + car.model}</Title>
        </AccessibilityContainer>
        <AccessibilityContainer>
          <Title>{car.price}zł</Title>
          <Marginer direction="horizontal" margin={50} />
          {user ? (
            <Link to="/basket">
              <Button
                size={45}
                paddingW={2}
                paddingH={3}
                disabled={disabled ? true : ""}
                onClick={() => {
                  addToBasket();
                }}
              >
                {disabled ? "Out of stock" : "Kup teraz"}
              </Button>
            </Link>
          ) : (
            <Title>Musisz być zalogowany!</Title>
          )}
        </AccessibilityContainer>
      </TitlePriceContainer>

      <ContentContainer>
        <InfoWrapper>
          <Title>Skrzynia</Title>
          <Title>{car.equipment.gearbox}</Title>
        </InfoWrapper>
        <InfoWrapper>
          <Title>Przebieg</Title>
          <Title>{car.odometer}km</Title>
        </InfoWrapper>
        <InfoWrapper>
          <Title>Rok</Title>
          <Title>{car.production_date}</Title>
        </InfoWrapper>
        <InfoWrapper>
          <Title>Paliwo</Title>
          <Title>{car.fuel}</Title>
        </InfoWrapper>
        <InfoWrapper>
          <Title>Moc</Title>
          <Title>{car.power}KM</Title>
        </InfoWrapper>
      </ContentContainer>

      <Marginer direction="vertical" margin={30} />
      <Basic>Dane Podstawowe</Basic>
      <Marginer direction="vertical" margin={30} />
      <InformationContent
        engine={car.engine}
        carType={car.carType}
        date={car.production_date}
        doors={car.equipment.doors}
        windows={car.equipment.powerWindows ? "\u2713" : "\u274C"}
        upholostery={car.equipment.upholostery}
        ac={car.equipment.ac ? "\u2713" : "\u274C"}
        abs={car.equipment.abs ? "\u2713" : "\u274C"}
        esp={car.equipment.esp ? "\u2713" : "\u274C"}
      />
    </TopContainer>
  );
}
