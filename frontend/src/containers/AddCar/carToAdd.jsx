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
  InformationContainer,
} from "../../components/carManageCommons";
import { firebaseStorage } from "../../firebase";
import { ErrorDialog } from "../../components/ErrorDialog";

export function CarToAdd(props) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const token = user ? `Bearer ${user.token}` : "";

  const [show, setShow] = useState(false);
  const [body, setBody] = useState([]);

  const [image, setImage] = useState(null);
  //basic car info
  const [newBrand, setNewBrand] = useState("");
  const [newModel, setNewModel] = useState("");
  const [newCarType, setNewCarType] = useState("");
  const [newEngine, setNewEngine] = useState("");
  const [newFuel, setNewFuel] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newOdometer, setNewOdometer] = useState(0);
  const [newProductionDate, setNewProductionDate] = useState("");
  const [newAvailabilityStatus, setNewAvailabilityStatus] = useState("");
  const [newURL, setNewURL] = useState("");
  const [newPower, setNewPower] = useState(0);

  //equipment car
  const [newDoors, setNewDoors] = useState(0);
  const [newPowerWindows, setNewPowerWindows] = useState(false);
  const [newUpholostery, setNewUpholostery] = useState("");
  const [newAC, setNewAC] = useState(false);
  const [newGearbox, setNewGearbox] = useState("");
  const [newABS, setNewABS] = useState(false);
  const [newESP, setNewESP] = useState(false);

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

  var addCar = function () {
    axios
      .post(
        "http://localhost:8080/api/car/add",
        {
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
          url: newURL,
          power: newPower,
          equipment: {
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
        window.location = "/cars";
      })
      .catch((error) => {
        console.log("Error: ", error.response.data);
        setBody(error.response.data.validationErrors);
        setShow(true);
      });
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  var uploadFile = function () {
    console.log("upload");
    const uploadPath = firebaseStorage.ref(`images/${image.name}`).put(image);
    uploadPath.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        firebaseStorage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setNewURL(url);
            console.log("URL: " + url);
          });
      }
    );
  };

  return (
    <TopContainer>
      <ErrorDialog show={show} body={body} handler={setShow} />
      <ContentContainer>
        <Title>Select Image</Title>
      </ContentContainer>
      <SelectedContainer>
        <Input type="file" onChange={handleChange} />
        <Button
          onClick={() => {
            uploadFile();
          }}
        >
          Upload
        </Button>
      </SelectedContainer>
      <ContentContainer>
        <Title>Basic car info</Title>
      </ContentContainer>
      <InformationContainer>
        <Information>
          <LeftInfo>ID</LeftInfo>
          <Input
            style={{ textAlign: "right" }}
            placeholder={0}
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
          <LeftInfo>Power</LeftInfo>
          <Input
            type="text"
            placeholder={newPower}
            onChange={(e) => {
              setNewPower(e.target.value);
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
          addCar();
        }}
      >
        Zapisz
      </Button>
    </TopContainer>
  );
}
