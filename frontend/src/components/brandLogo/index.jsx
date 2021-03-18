import React from "react";
import styled from "styled-components";

import LogoSrc from "../../images/logo.png";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "15em")};
  height: ${({ size }) => (size ? size + "px" : "15em")};

  img {
    width: 100%;
    height: 100%;
  }
`;

export function BrandLogo(props) {
  return (
    <BrandLogoContainer>
      <LogoImage>
        <img src={LogoSrc} alt="Service logo" />
      </LogoImage>
    </BrandLogoContainer>
  );
}
