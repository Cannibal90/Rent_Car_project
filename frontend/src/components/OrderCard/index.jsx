import React from "react";
import {
  Icon,
  Input,
  ContentContainer,
  Info,
  CarWrapper,
  CarContainer,
} from "../Cards";
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faSave,
} from "@fortawesome/free-regular-svg-icons";
import { DropdownList } from "../dropdownList";
import styled from "styled-components";
import { CarCard } from "../carCard";
import { deleteSelectedOrder } from "../../_ordersFunctions";
import { ErrorDialog } from "../ErrorDialog";

const OrderCarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10%;
`;

const TopContainer = styled.div`
  width: 100%;
`;

export function OrderCard(props) {
  const {
    id,
    status,
    paymentType,
    amount,
    paymentDate,
    paymentId,
    cars,
    orderUser,
  } = props;
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const token = user ? `Bearer ${user.token}` : "";
  const [disable, setDisable] = useState(true);
  const [newStatus, setNewStatus] = useState(status);
  const [newPaymentType, setNewPaymentType] = useState(paymentType);
  const [newAmount, setNewAmount] = useState(amount);
  const [newPaymentDate, setNewPaymentDate] = useState(paymentDate);
  const [newCars, setNewCars] = useState(cars);

  const [show, setShow] = useState(false);
  const [body, setBody] = useState([]);

  var modifyOrder = function () {
    setDisable(false);
  };

  var saveOrder = function (id) {
    axios
      .put(
        "http://localhost:8080/api/order/update/" + id,
        {
          id: id,
          status: newStatus,
          payment: {
            paymentType: newPaymentType,
            amount: newAmount,
            paymentDate: newPaymentDate,
            id: paymentId,
          },
          user: orderUser,
          cars: newCars,
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
        console.log("Error: ", error.response.data);
        setBody(error.response.data.validationErrors);
        setShow(true);
      });
  };

  var deleteOrder = function (id) {
    deleteSelectedOrder(id).then(() => window.location.reload());
  };
  var statusOption = [
    "Verification",
    "Wating for payment",
    "Implementation",
    "Delivered",
  ];
  var click = function (car) {
    const index = cars.indexOf(car);
    if (index > -1) {
      cars.splice(index, 1);
      setNewCars(cars);
    }
  };
  var paymentTypes = ["Bank transfer", "Cash", "Payment card"];
  return (
    <TopContainer>
      <ErrorDialog show={show} body={body} handler={setShow} />
      <ContentContainer>
        <Input type="text" placeholder={id} disabled={true} />
        <DropdownList
          items={statusOption}
          selected={status}
          handler={setNewStatus}
          disabled={disable ? true : ""}
        />
        <DropdownList
          items={paymentTypes}
          selected={paymentType}
          handler={setNewPaymentType}
          disabled={disable ? true : ""}
        />
        <Input
          type="text"
          placeholder={amount}
          onChange={(e) => {
            setNewAmount(e.target.value);
          }}
          disabled={disable ? true : ""}
        />
        <Input
          type="text"
          placeholder={paymentDate}
          onChange={(e) => {
            setNewPaymentDate(e.target.value);
          }}
          disabled={disable ? true : ""}
        />
        {disable ? (
          <Icon>
            <FontAwesomeIcon icon={faEdit} onClick={() => modifyOrder()} />
          </Icon>
        ) : (
          <Icon>
            <FontAwesomeIcon icon={faSave} onClick={() => saveOrder(id)} />
          </Icon>
        )}

        <Icon>
          <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteOrder(id)} />
        </Icon>
      </ContentContainer>
      <OrderCarContainer>
        <Info
          style={{
            fontSize: "30px",
            fontWeight: "600",
            height: "40px",
          }}
        >
          Cars
        </Info>
        <CarContainer>
          <CarWrapper>
            {cars.map((car) => (
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
                power={car.power}
                urls={car.url}
                status={car.availabilityStatus}
                disabled={disable ? true : ""}
                handler={() => {
                  click(car);
                }}
              />
            ))}
          </CarWrapper>
        </CarContainer>
      </OrderCarContainer>
    </TopContainer>
  );
}
