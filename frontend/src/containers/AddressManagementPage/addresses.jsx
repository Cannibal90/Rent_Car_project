import styled from "styled-components";
import axios from "axios";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { AddressCard } from "../../components/addressCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faSave } from "@fortawesome/free-regular-svg-icons";
import { Input, Info, Icon, ContentContainer } from "../../components/Cards";

const AddressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10%;
`;

export function Addresses(props) {
  const { userId } = props;
  console.log("Id: " + userId);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const token = `Bearer ${user.token}`;
  const [addressList, setAddressList] = useState([]);

  //////////////
  const [newCountry, setNewCountry] = useState();
  const [newCity, setNewCity] = useState();
  const [newStreet, setNewStreet] = useState();
  const [newNumber, setNewNumber] = useState();
  const [newPostCode, setNewPostCode] = useState();
  const [disable, setDisable] = useState(false);

  //////////////

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/address/userId/" + userId, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json ",
        },
      })
      .then((response) => {
        console.log("Response: ", response.data);
        setAddressList(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error.response);
      });
  }, [token]);

  var addAddress = function (id) {
    setDisable(true);
    console.log("dziala?: " + id);
  };

  return (
    <AddressContainer>
      <ContentContainer>
        <Info>Id</Info>
        <Info>country</Info>
        <Info>city</Info>
        <Info>street</Info>
        <Info>number</Info>
        <Info>post code</Info>
        <Info>edit</Info>
        <Info>delete</Info>
      </ContentContainer>
      <ContentContainer>
        <Button
          size={35}
          paddingW={40}
          paddingH={2}
          onClick={() => addAddress(userId)}
        >
          +
        </Button>
      </ContentContainer>

      {disable ? (
        <ContentContainer>
          <Input type="text" placeholder={"id"} disabled={true} />
          <Input
            type="text"
            placeholder={"country"}
            onChange={(e) => {
              setNewCountry(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder={"city"}
            onChange={(e) => {
              setNewCity(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder={"street"}
            onChange={(e) => {
              setNewStreet(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder={"number"}
            onChange={(e) => {
              setNewNumber(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder={"postCode"}
            onChange={(e) => {
              setNewPostCode(e.target.value);
            }}
          />
          <Icon>
            <FontAwesomeIcon
              icon={faSave}
              onClick={() => {
                console.log("save");
              }}
            />
          </Icon>
          <Icon>
            <FontAwesomeIcon
              icon={faTrashAlt}
              onClick={() => {
                setDisable(false);
              }}
            />
          </Icon>
        </ContentContainer>
      ) : (
        <></>
      )}

      {addressList.map((address) => (
        <AddressCard
          id={address.id}
          country={address.country}
          city={address.city}
          street={address.street}
          number={address.number}
          postCode={address.postCode}
          userId={userId}
        />
      ))}
    </AddressContainer>
  );
}
