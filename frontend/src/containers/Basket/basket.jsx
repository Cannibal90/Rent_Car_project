import styled from "styled-components";
import { ContentContainer, WeightInfo, Title } from "../../components/Cards";
import { useEffect, useState } from "react";
import { getBasket } from "../../_ordersFunctions";
import { HistoryBasketCard } from "../../components/HistoryBasketCard";

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

export function BasketOrders(props) {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    getBasket().then((res) => setOrderList(res));
  }, []);

  return (
    <OrderContainer>
      <ContentContainer>
        <Title>Basket</Title>
      </ContentContainer>
      <ContentContainer>
        <WeightInfo>id</WeightInfo>
        <WeightInfo>Status</WeightInfo>
        <WeightInfo>payment type</WeightInfo>
        <WeightInfo>amount</WeightInfo>
        <WeightInfo>payment date</WeightInfo>
      </ContentContainer>
      {orderList.map((order) => (
        <HelpContainer key={"divbasket" + order.id}>
          <HistoryBasketCard
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
