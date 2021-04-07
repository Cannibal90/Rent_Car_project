import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { ContentContainer, Info, Title } from "../../components/Cards";
import { OrderCard } from "../../components/OrderCard";

const OrderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10%;
`;

const HelpContainer = styled.div`
  width: 100%;
`;

export function ManageOrders(props) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const token = `Bearer ${user.token}`;
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/order/all", {
        headers: {
          Authorization: token,
          "Content-Type": "application/json ",
        },
      })
      .then((response) => {
        console.log("Response: ", response.data);
        setOrderList(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error.response);
      });
  }, [token]);

  return (
    <OrderContainer>
      <ContentContainer>
        <Title>Orders</Title>
      </ContentContainer>
      <ContentContainer>
        <Info>id</Info>
        <Info>Status</Info>
        <Info>payment type</Info>
        <Info>amount</Info>
        <Info>payment date</Info>
        <Info>edit</Info>
        <Info>delete</Info>
      </ContentContainer>
      {orderList.map((order) => (
        <HelpContainer key={"div" + order.id}>
          <OrderCard
            key={order.id}
            id={order.id}
            status={order.status}
            paymentType={order.payment.paymentType}
            amount={order.payment.amount}
            paymentDate={order.payment.paymentDate}
            paymentId={order.payment.id}
            cars={order.cars}
            orderUser={order.user}
          />
        </HelpContainer>
      ))}
    </OrderContainer>
  );
}
