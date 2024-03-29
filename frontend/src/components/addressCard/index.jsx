import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faSave,
} from "@fortawesome/free-regular-svg-icons";

import { Input, Icon, ContentContainer, TopContainer } from "../Cards";
import { deleteSelectedAddress } from "../../_addressesFunctions";
import { ErrorDialog } from "../ErrorDialog";

export function AddressCard(props) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const token = user ? `Bearer ${user.token}` : "";
  const { id, country, city, street, number, postCode } = props;
  const [newCountry, setNewCountry] = useState(country);
  const [newCity, setNewCity] = useState(city);
  const [newStreet, setNewStreet] = useState(street);
  const [newNumber, setNewNumber] = useState(number);
  const [newPostCode, setNewPostCode] = useState(postCode);
  const [disable, setDisable] = useState(true);

  const [show, setShow] = useState(false);
  const [body, setBody] = useState([]);

  var updateAddress = function (id) {
    setDisable(false);
  };
  var saveAddress = function (id) {
    axios
      .put(
        "http://localhost:8080/api/address/update/" + id,
        {
          id: id,
          country: newCountry,
          city: newCity,
          street: newStreet,
          number: newNumber,
          postCode: newPostCode,
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
        setDisable(true);
        window.location.reload();
      })
      .catch((error) => {
        console.log("Error: ", error.response);
        setBody(error.response.data.validationErrors);
        setShow(true);
      });
  };
  var deleteAddress = function (id) {
    deleteSelectedAddress(id).then(() => {
      window.location.reload();
    });
  };

  return (
    <TopContainer>
      <ErrorDialog show={show} body={body} handler={setShow} />

      <ContentContainer>
        <Input type="text" placeholder={id} disabled={true} />
        <Input
          type="text"
          placeholder={country}
          onChange={(e) => {
            setNewCountry(e.target.value);
          }}
          disabled={disable ? true : ""}
        />
        <Input
          type="text"
          placeholder={city}
          onChange={(e) => {
            setNewCity(e.target.value);
          }}
          disabled={disable ? true : ""}
        />
        <Input
          type="text"
          placeholder={street}
          onChange={(e) => {
            setNewStreet(e.target.value);
          }}
          disabled={disable ? true : ""}
        />
        <Input
          type="text"
          placeholder={number}
          onChange={(e) => {
            setNewNumber(e.target.value);
          }}
          disabled={disable ? true : ""}
        />
        <Input
          type="text"
          placeholder={postCode}
          onChange={(e) => {
            setNewPostCode(e.target.value);
          }}
          disabled={disable ? true : ""}
        />
        {disable ? (
          <Icon>
            <FontAwesomeIcon icon={faEdit} onClick={() => updateAddress(id)} />
          </Icon>
        ) : (
          <Icon>
            <FontAwesomeIcon icon={faSave} onClick={() => saveAddress(id)} />
          </Icon>
        )}
        <Icon>
          <FontAwesomeIcon
            icon={faTrashAlt}
            onClick={() => deleteAddress(id)}
          />
        </Icon>
      </ContentContainer>
    </TopContainer>
  );
}
