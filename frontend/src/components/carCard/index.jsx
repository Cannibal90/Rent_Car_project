import styled from "styled-components";
import { Marginer } from "../marginer";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 500px;
  min-height: 450px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  margin: 3.5em;
  margin-bottom: 1.3em;
`;

const TopContainer = styled.div`
  width: 100%;
`;

const CarThumbnail = styled.div`
  width: 100%;
  height: 18em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 15px 14px;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(15, 15, 15, 0.19);
  padding: 0 10px;
`;

const Title = styled.div`
  font-size: 24px;
  margin: 0;
  font-weight: 500;
  color: #000;
`;

export function CarCard(props) {
  const { title, description, urls } = props;

  return (
    <CardContainer>
      <TopContainer>
        <CarThumbnail>
          <img src={urls} alt="car" />
        </CarThumbnail>
      </TopContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Marginer direction="vertical" margin={10} />
      </ContentContainer>
      <BottomContainer>{description}</BottomContainer>
    </CardContainer>
  );
}
