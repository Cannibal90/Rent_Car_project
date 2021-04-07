import { useState } from "react";
import { ContentContainer, Input } from "../../components/Cards";
import { DropdownList } from "../../components/dropdownList";
import { Button } from "../../components/button";
import { Marginer } from "../../components/marginer";
import axios from "axios";
import {
  Title,
  LeftInfo,
  Information,
  TopContainer,
  SelectedContainer,
  CarGallery,
  InformationContainer,
} from "../../components/carManageCommons";

export function CarToUpdate(props) {
  const { car } = props;
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const token = `Bearer ${user.token}`;

  //basic car info
  const [newBrand, setNewBrand] = useState(car.brand.brandName);
  const [newModel, setNewModel] = useState(car.model);
  const [newCarType, setNewCarType] = useState(car.carType);
  const [newEngine, setNewEngine] = useState(car.engine);
  const [newFuel, setNewFuel] = useState(car.fuel);
  const [newPrice, setNewPrice] = useState(car.price);
  const [newOdometer, setNewOdometer] = useState(car.odometer);
  const [newProductionDate, setNewProductionDate] = useState(
    car.production_date
  );
  const [newAvailabilityStatus, setNewAvailabilityStatus] = useState(
    car.availabilityStatus
  );

  //equipment car
  const [newDoors, setNewDoors] = useState(car.equipment.doors);
  const [newPowerWindows, setNewPowerWindows] = useState(
    car.equipment.powerWindows
  );
  const [newUpholostery, setNewUpholostery] = useState(
    car.equipment.upholostery
  );
  const [newAC, setNewAC] = useState(car.equipment.ac);
  const [newGearbox, setNewGearbox] = useState(car.equipment.gearbox);
  const [newABS, setNewABS] = useState(car.equipment.abs);
  const [newESP, setNewESP] = useState(car.equipment.esp);

  const images = require.context("../../images", true);

  const brands = [
    "Acura",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "Bmw",
    "Chevrolet",
    "Chrysler",
    "Citroen",
    "Dacia",
    "Dodge",
    "Fiat",
    "Ford",
    "Honda",
    "Hyundai",
    "Infinity",
    "Jaguar",
    "Jeep",
    "Kia",
    "Lexus",
    "Mazda",
    "Mercedes",
    "Mini",
    "Mitsubishi",
    "Opel",
    "Peugeot",
    "Porshe",
    "Renault",
    "Saab",
    "Seat",
    "Skoda",
    "Subaru",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volo",
  ];
  const availabilityStatus = ["Available", "Soon", "Out of stock"];
  const CarType = [
    "Cabriolet",
    "Coupe",
    "Hatchback",
    "Liftback",
    "Kombi",
    "Minivan",
    "Sedan",
    "SUV",
  ];

  const Fuel = ["Petrol", "Diesel", "Electric"];
  const Gearbox = ["Automatic", "Manual 5S", "Manual 6S"];
  const Upholostery = ["Fabric", "Half leather", "Leather", "Velor"];

  var updateCar = function () {
    console.log("update" + car.id);
    axios
      .put(
        "http://localhost:8080/api/car/update/" + car.id,
        {
          id: car.id,
          brand: {
            brandName: newBrand,
          },
          model: newModel,
          carType: newCarType,
          engine: newEngine,
          fuel: newFuel,
          price: newPrice,
          odometer: newOdometer,
          production_date: newProductionDate,
          availabilityStatus: newAvailabilityStatus,
          equipment: {
            id: car.equipment.id,
            doors: newDoors,
            powerWindows: newPowerWindows,
            upholostery: newUpholostery,
            ac: newAC,
            gearbox: newGearbox,
            abs: newABS,
            esp: newESP,
          },
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json ",
          },
        }
      )
      .then((response) => {
        console.log("Response: ", response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log("Error: ", error.response.data);
      });
  };

  return (
    <TopContainer>
      <SelectedContainer>
        <CarGallery>
          <img
            src={images(`./${car.brand.brandName} ${car.model}.jpg`).default}
            alt="car"
          />
        </CarGallery>
      </SelectedContainer>
      <ContentContainer>
        <Title>Basic car info</Title>
      </ContentContainer>
      <InformationContainer>
        <Information>
          <LeftInfo>ID</LeftInfo>
          <Input
            style={{ textAlign: "right" }}
            placeholder={car.id}
            disabled={true}
          />
        </Information>
        <Information>
          <LeftInfo>Marka</LeftInfo>
          <DropdownList
            items={brands}
            selected={newBrand}
            handler={setNewBrand}
          />
        </Information>
        <Information>
          <LeftInfo>Model</LeftInfo>
          <Input
            type="text"
            placeholder={newModel}
            onChange={(e) => {
              setNewModel(e.target.value);
            }}
          />
        </Information>
        <Information>
          <LeftInfo>Rodzaj nadwozia</LeftInfo>
          <DropdownList
            items={CarType}
            selected={newCarType}
            handler={setNewCarType}
          />
        </Information>
        <Information>
          <LeftInfo>Data produkcji</LeftInfo>
          <Input
            type="text"
            placeholder={newProductionDate}
            onChange={(e) => {
              setNewProductionDate(e.target.value);
            }}
          />
        </Information>

        <Information>
          <LeftInfo>Silnik</LeftInfo>
          <Input
            type="text"
            placeholder={newEngine}
            onChange={(e) => {
              setNewEngine(e.target.value);
            }}
          />
        </Information>

        <Information>
          <LeftInfo>Przebieg</LeftInfo>
          <Input
            type="text"
            placeholder={newOdometer}
            onChange={(e) => {
              setNewOdometer(e.target.value);
            }}
          />
        </Information>

        <Information>
          <LeftInfo>Paliwo</LeftInfo>
          <DropdownList items={Fuel} selected={newFuel} handler={setNewFuel} />
        </Information>

        <Information>
          <LeftInfo>Cena</LeftInfo>
          <Input
            type="text"
            placeholder={newPrice}
            onChange={(e) => {
              setNewPrice(e.target.value);
            }}
          />
        </Information>

        <Information>
          <LeftInfo>Status</LeftInfo>
          <DropdownList
            items={availabilityStatus}
            selected={newAvailabilityStatus}
            handler={setNewAvailabilityStatus}
          />
        </Information>
      </InformationContainer>

      <ContentContainer>
        <Title>Equipment</Title>
      </ContentContainer>
      <InformationContainer>
        <Information>
          <LeftInfo>Skrzynia biegów</LeftInfo>
          <DropdownList
            items={Gearbox}
            selected={newGearbox}
            handler={setNewGearbox}
          />
        </Information>
        <Information>
          <LeftInfo>Drzwi</LeftInfo>
          <Input
            type="text"
            placeholder={newDoors}
            onChange={(e) => {
              setNewDoors(e.target.value);
            }}
          />
        </Information>
        <Information>
          <LeftInfo>Elektryczne szyby</LeftInfo>
          <Input
            type="checkbox"
            checked={newPowerWindows}
            onChange={(e) => {
              setNewPowerWindows(e.target.checked);
            }}
          />
        </Information>
        <Information>
          <LeftInfo>Tapicerka</LeftInfo>
          <DropdownList
            items={Upholostery}
            selected={newUpholostery}
            handler={setNewUpholostery}
          />
        </Information>
        <Information>
          <LeftInfo>Klimatyzacja</LeftInfo>

          <Input
            type="checkbox"
            checked={newAC}
            onChange={(e) => {
              setNewAC(e.target.checked);
            }}
          />
        </Information>
        <Information>
          <LeftInfo>ABS</LeftInfo>

          <Input
            type="checkbox"
            checked={newABS}
            onChange={(e) => {
              setNewABS(e.target.checked);
            }}
          />
        </Information>

        <Information>
          <LeftInfo>ESP</LeftInfo>

          <Input
            type="checkbox"
            checked={newESP}
            onChange={(e) => {
              setNewESP(e.target.checked);
            }}
          />
        </Information>
      </InformationContainer>
      <Marginer direction="vertical" margin={20} />
      <Button
        size={30}
        onClick={() => {
          updateCar();
        }}
      >
        Zapisz
      </Button>
    </TopContainer>
  );
}
