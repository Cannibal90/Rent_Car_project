import styled from "styled-components";
import { ManageCard } from "../../components/manageCard";
import users from "../../images/users_1.jpg";
import orders from "../../images/order_1.jpg";
import cars from "../../images/cars_1.jpg";

const ManageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2%;
  margin-bottom: 10%;
`;

const ManageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 0;
  flex-wrap: wrap;
`;

const MainTitle = styled.div`
  width: 100%;
  align-items: center;
  font-size: 46px;
  margin: 0;
  font-weight: 600;
  color: #000;
  text-decoration: underline;
`;

export function ManageOfferts(props) {
  return (
    <ManageContainer>
      <MainTitle>Wybierz kategorie do edycji</MainTitle>
      <ManageWrapper>
        <ManageCard urls={users} title="Users" />
        <ManageCard urls={orders} title="Orders" />
        <ManageCard urls={cars} title="Cars" />
      </ManageWrapper>
    </ManageContainer>
  );
}
