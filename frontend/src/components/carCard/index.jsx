import styled from "styled-components";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";

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

  &:hover {
    box-shadow: 0 0 33px rgba(0, 0, 0, 0.7);
  }

  &:focus {
    text-decoration: none;
    color: #000;
  }
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
  align-items: flex-start;
  justify-content: space-between;
  //flex: 1;
  padding: 15px 14px;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid rgba(15, 15, 15, 0.19);
  padding: 0 10px;
`;

const TitlePrice = styled.div`
  font-size: 26px;
  margin: 0;
  font-weight: 600;
  color: #000;
`;

const EnginePetrol = styled.div`
  font-size: 20px;
  margin: 0;
  font-weight: 600;
  color: #000;
`;

const Info = styled.div`
  font-size: 20px;
  margin: 0;
  font-weight: 500;
  color: #000;
`;

export function CarCard(props) {
  const {
    id,
    title,
    price,
    engine,
    fuel,
    year,
    odometer,
    gearbox,
    urls,
  } = props;

  var to = `/cars/${id}`;
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <CardContainer>
        <TopContainer>
          <CarThumbnail>
            <img src={urls} alt="car" />
          </CarThumbnail>
        </TopContainer>
        <ContentContainer>
          <TitlePrice>{title}</TitlePrice>
          <TitlePrice>{price} zł</TitlePrice>
        </ContentContainer>
        <BottomContainer>
          <EnginePetrol>
            <Marginer direction="Vertical" margin={5} />
            {engine} {fuel}
          </EnginePetrol>
          <Info>
            <Marginer direction="Vertical" margin={5} />
            {year} {"\u25CF"} {odometer}km {"\u25CF"} {gearbox}
          </Info>
        </BottomContainer>
      </CardContainer>
    </Link>
  );
}
