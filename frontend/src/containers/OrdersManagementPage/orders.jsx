import styled from "styled-components";
import { useState, useEffect } from "react";
import { ContentContainer, Info, Title } from "../../components/Cards";
import { OrderCard } from "../../components/OrderCard";
import { getAllOrders } from "../../_ordersFunctions";

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
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    getAllOrders().then((res) => {
      setOrderList(res);
    });
  }, []);

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
