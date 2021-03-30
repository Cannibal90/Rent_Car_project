import styled from "styled-components";

const InformationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InformationWrapper = styled.div`
  display: flex;
  margin: 0 15%;
  flex-wrap: wrap;
`;

const Information = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 800px;
  min-height: 100px;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
  margin: 0.5em;
  margin-top: 1.3em;
  padding: 0 1%;
`;

const LeftInfo = styled.div`
  font-size: 26px;
  margin: 0;
  font-weight: 600;
  color: #000;
`;
const RightInfo = styled.div`
  font-size: 26px;
  margin: 0;
  font-weight: 500;
  color: #000;
`;
export function InformationContent(props) {
  const { carType, date, doors, windows, upholostery, ac, abs, esp } = props;
  return (
    <InformationContainer>
      <InformationWrapper>
        <Information>
          <LeftInfo>Rodzaj nadwozia</LeftInfo>
          <RightInfo>{carType}</RightInfo>
        </Information>
        <Information>
          <LeftInfo>Data produkcji</LeftInfo>
          <RightInfo>{date}</RightInfo>
        </Information>
        <Information>
          <LeftInfo>Drzwi</LeftInfo>
          <RightInfo>{doors}</RightInfo>
        </Information>
        <Information>
          <LeftInfo>Elektryczne szyby</LeftInfo>
          <RightInfo>{windows}</RightInfo>
        </Information>
        <Information>
          <LeftInfo>Tapicerka</LeftInfo>
          <RightInfo>{upholostery}</RightInfo>
        </Information>
        <Information>
          <LeftInfo>Klimatyzacja</LeftInfo>
          <RightInfo>{ac}</RightInfo>
        </Information>
        <Information>
          <LeftInfo>ABS</LeftInfo>
          <RightInfo>{abs}</RightInfo>
        </Information>
        <Information>
          <LeftInfo>ESP</LeftInfo>
          <RightInfo>{esp}</RightInfo>
        </Information>
      </InformationWrapper>
    </InformationContainer>
  );
}
