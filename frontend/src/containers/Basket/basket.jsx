import {
  ContentContainer,
  WeightInfo,
  Title,
  CommonContainer,
  WidthContainer,
} from "../../components/Cards";
import { useEffect, useState } from "react";
import { getBasket } from "../../_ordersFunctions";
import { HistoryBasketCard } from "../../components/HistoryBasketCard";

export function BasketOrders(props) {
  const [order, setOrder] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBasket().then((res) => {
      setOrder(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <CommonContainer>
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

      {!isLoading && order && (
        <WidthContainer>
          <HistoryBasketCard
            id={order.id}
            status={order.status}
            paymentType={order.payment.paymentType}
            amount={order.payment.amount}
            paymentDate={order.payment.paymentDate}
            paymentId={order.payment.id}
            cars={order.cars}
            orderUser={order.user}
            disable={""}
          />
        </WidthContainer>
      )}
    </CommonContainer>
  );
}
