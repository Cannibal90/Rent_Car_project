import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 3em;
  padding-bottom: 0;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1em;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-of-type) {
    margin-right: 3%;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  padding: 0 10px;
`;

const RightBottomContainer = styled.div`
  display: flex;
`;

const LeftBottomContainer = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 13px;
  color: #000;
  font-weight: 600;
  font-size: 30px;
`;

const FLink = styled.a`
  text-decoration: none;
  color: #6f6f6f;
  font-weight: 500;
  font-size: 25px;
  cursor: pointer;
`;

const PrivacyText = styled.h6`
  color: #a3a3a3;
  font-size: 18px;
  margin: 0;
  margin-left: 10px;
  display: flex;
  margin-top: 5px;
  align-items: center;
`;
const SocialIcon = styled.div`
  color: #8a8a8a;
  font-size: 30px;
  cursor: pointer;
  transition: background-color, 200ms ease-in-out;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
  &:hover {
    color: #777777;
  }
`;

export function Footer(props) {
  return (
    <FooterContainer>
      <TopContainer>
        <ContentContainer>
          <Title>Pytania</Title>
          <FLink>Kontakt</FLink>
          <FLink>FAQ</FLink>
        </ContentContainer>
        <ContentContainer>
          <Title>Informacje</Title>
          <FLink>Polityka prywatnosci</FLink>
          <FLink>Dane firmy</FLink>
          <FLink>Warunki sprzedaży</FLink>
        </ContentContainer>
      </TopContainer>
      <BottomContainer>
        <LeftBottomContainer>
          <PrivacyText>&#169; All Rights Reserved. 2021</PrivacyText>
        </LeftBottomContainer>
        <LeftBottomContainer>
          <PrivacyText>Created by Krystian Kopeć 2021</PrivacyText>
        </LeftBottomContainer>
        <RightBottomContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faFacebook} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faInstagram} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faYoutube} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
        </RightBottomContainer>
      </BottomContainer>
    </FooterContainer>
  );
}
