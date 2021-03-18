import React from "react";
import styled from "styled-components";
import { Button } from "../../components/button";

import TopSectionBackgroundImg from "../../images/home_background.jpg";
import Pointer from "../../images/odometer_pointer_w.png";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 900px;
  background: url(${TopSectionBackgroundImg});
  background-position: 0px -150px;
  background-size: cover;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(87, 97, 100, 0.9);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StandoutImg = styled.div`
  width: 10em;
  height: 8em;
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-top: 10%;
  height: 5%;
  font-size: 5em;
  color: #fff;
  line-height: 1.7;
`;

export function TopSection(props) {
  const { children } = props;

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <Title>Kup swoje auto juz dziś</Title>
        <TopSectionInnerContainer>
          <Button> Znajdz swoje auto </Button>
        </TopSectionInnerContainer>

        <TopSectionInnerContainer>
          <StandoutImg>
            <img src={Pointer} alt="pointer with text" />
            Szybko
          </StandoutImg>

          <StandoutImg>
            <img src={Pointer} alt="pointer with text" />
            Tanio
          </StandoutImg>

          <StandoutImg>
            <img src={Pointer} alt="pointer with text" />
            Gdzie tylko chcesz
          </StandoutImg>
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
