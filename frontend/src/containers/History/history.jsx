import styled from "styled-components";
import { ContentContainer, WeightInfo, Title } from "../../components/Cards";
import { useEffect, useState } from "react";
import { getHistory } from "../../_ordersFunctions";
import { HistoryBasketCard } from "../../components/HistoryBasketCard";
import Pagination from "react-bootstrap/Pagination";

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

export function HistoryOrders(props) {
  const [orderList, setOrderList] = useState([]);

  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    getHistory(activePage, itemsPerPage).then((res) => {
      setTotalPages(res.totalPages);
      setActivePage(res.number);
      setItemsPerPage(res.size);

      setOrderList(res.content);
    });
  }, [activePage, itemsPerPage]);

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

  return (
    <HelpContainer>
      <OrderContainer>
        <ContentContainer>
          <Title>History orders</Title>
        </ContentContainer>
        <ContentContainer>
          <WeightInfo>id</WeightInfo>
          <WeightInfo>Status</WeightInfo>
          <WeightInfo>payment type</WeightInfo>
          <WeightInfo>amount</WeightInfo>
          <WeightInfo>payment date</WeightInfo>
        </ContentContainer>
        {orderList.map((order) => (
          <HelpContainer key={"div" + order.id}>
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
              disable={true}
            />
          </HelpContainer>
        ))}
      </OrderContainer>
      <Pagination style={{ justifyContent: "center" }} size="lg">
        {items}
      </Pagination>
    </HelpContainer>
  );
}
