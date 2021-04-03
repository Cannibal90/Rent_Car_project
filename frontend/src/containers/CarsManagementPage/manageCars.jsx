import { ContentContainer, Title } from "../../components/Cards";
import styled from "styled-components";

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
    </CarsContainer>
  );
}
