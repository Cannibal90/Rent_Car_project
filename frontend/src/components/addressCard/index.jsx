import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faSave,
} from "@fortawesome/free-regular-svg-icons";

import { Input, Icon, ContentContainer, TopContainer } from "../Cards";

export function AddressCard(props) {
  const { id, country, city, street, number, postCode, userId } = props;
  const [newCountry, setNewCountry] = useState(country);
  const [newCity, setNewCity] = useState(city);
  const [newStreet, setNewStreet] = useState(street);
  const [newNumber, setNewNumber] = useState(number);
  const [newPostCode, setNewPostCode] = useState(postCode);
  const [disable, setDisable] = useState(true);

  var updateAddress = function (id) {
    console.log("update " + id);
    setDisable(false);
  };
  var saveAddress = function (id) {
    console.log("save " + id);
    setDisable(true);
  };
  var deleteAddress = function (id) {
    console.log("delete " + id);
  };

  return (
    <TopContainer>
      {/* dialog */}

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
