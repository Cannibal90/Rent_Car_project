import { ContentContainer, Title } from "../../components/Cards";
import styled from "styled-components";
import { Button } from "../../components/button";
import { Cars } from "../../containers/OffertsPage/cars";
const CarsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10%;
`;

export function ManageCars(props) {
  return (
    <CarsContainer>
      <ContentContainer>
        <Title>Cars</Title>
      </ContentContainer>
      <ContentContainer>
        <Button size={25} paddingH={3} paddingW={2}>
          Delete Mode
        </Button>
      </ContentContainer>
      <Cars />
    </CarsContainer>
  );
}
