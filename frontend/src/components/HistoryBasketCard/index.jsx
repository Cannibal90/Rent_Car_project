import React from "react";
import { ContentContainer, Info } from "../Cards";
import styled from "styled-components";
import { CarCard } from "../carCard";
import { DropdownList } from "../dropdownList";
import { useState } from "react";
import axios from "axios";
import { Button } from "../button";

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

export function HistoryBasketCard(props) {
  const {
    id,
    status,
    paymentType,
    amount,
    paymentDate,
    paymentId,
    cars,
    disable,
    orderUser,
  } = props;
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const token = user ? `Bearer ${user.token}` : "";

  const [newPaymentType, setNewPaymentType] = useState(paymentType);
  var paymentTypes = ["Bank transfer", "Cash", "Payment card"];

  var approveOrder = function () {
    axios
      .put(
        "http://localhost:8080/api/order/update/" + id,
        {
          id: id,
          status: "Wating for payment",
          payment: {
            paymentType: newPaymentType,
            amount: amount,
            paymentDate: paymentDate,
            id: paymentId,
          },
          user: orderUser,
          cars: cars,
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
        //window.location.reload();
      })
      .catch((error) => {
        console.log("Error: ", error.response.data);
      });
  };

  return (
    <TopContainer>
      <ContentContainer>
        <Info>{id}</Info>
        <Info>{status}</Info>
        <DropdownList
          items={paymentTypes}
          selected={newPaymentType}
          handler={setNewPaymentType}
          disabled={disable ? true : ""}
        />
        <Info>{amount}</Info>
        <Info>{paymentDate}</Info>
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
                disabled={true}
              />
            ))}
          </CarWrapper>
        </CarContainer>
      </OrderCarContainer>

      {!disable && (
        <ContentContainer>
          <Button
            onClick={() => {
              approveOrder();
            }}
          >
            Złóż zamówienie
          </Button>
        </ContentContainer>
      )}
    </TopContainer>
  );
}
