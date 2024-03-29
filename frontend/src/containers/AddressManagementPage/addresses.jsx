import axios from "axios";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { AddressCard } from "../../components/addressCard";
import { CommonContainer, WidthContainer } from "../../components/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faSave } from "@fortawesome/free-regular-svg-icons";
import {
  Input,
  Info,
  Icon,
  ContentContainer,
  Title,
} from "../../components/Cards";
import { getAddressForSelectedUser } from "../../_addressesFunctions";
import { ErrorDialog } from "../../components/ErrorDialog";
import Pagination from "react-bootstrap/Pagination";

export function Addresses(props) {
  const { userId } = props;
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const token = user ? `Bearer ${user.token}` : "";
  const [addressList, setAddressList] = useState([]);

  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const [show, setShow] = useState(false);
  const [body, setBody] = useState([]);

  const [newCountry, setNewCountry] = useState();
  const [newCity, setNewCity] = useState();
  const [newStreet, setNewStreet] = useState();
  const [newNumber, setNewNumber] = useState();
  const [newPostCode, setNewPostCode] = useState();
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    getAddressForSelectedUser(userId, activePage, itemsPerPage).then((res) => {
      setTotalPages(res.totalPages);
      setActivePage(res.number);
      setItemsPerPage(res.size);

      setAddressList(res.content);
    });
  }, [userId, activePage, itemsPerPage]);

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

  var addAddress = function (id) {
    setDisable(true);
  };

  var saveAddress = function () {
    axios
      .post(
        "http://localhost:8080/api/address/add/" + userId,
        {
          country: newCountry,
          city: newCity,
          postCode: newPostCode,
          street: newStreet,
          number: newNumber,
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
        setBody(error.response.data.validationErrors);
        setShow(true);
      });
  };

  return (
    <WidthContainer>
      <CommonContainer>
        <ErrorDialog show={show} body={body} handler={setShow} />
        <ContentContainer>
          <Title>Addresses</Title>
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
                  saveAddress();
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
            key={address.id}
            id={address.id}
            country={address.country}
            city={address.city}
            street={address.street}
            number={address.number}
            postCode={address.postCode}
            userId={userId}
          />
        ))}
      </CommonContainer>
      <Pagination style={{ justifyContent: "center" }} size="lg">
        {items}
      </Pagination>
    </WidthContainer>
  );
}
