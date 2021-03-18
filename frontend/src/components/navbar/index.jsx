import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../../components/button";
import { Marginer } from "../marginer";

const NavbarContainer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;

  background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "#576164"};
`;

const AccessibilityContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AnchorLink = styled.a`
  font-size: 17px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;
  padding: 0 1.4em;

  &:hover {
    filter: contrast(0.6);
  }
`;

export function Navbar(props) {
  const { useTransparent } = props;
  return (
    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogo />
      <AccessibilityContainer>
        <Button size={15} paddingW={2} paddingH={3}>
          Register
        </Button>
        <Marginer direction="horizontal" margin={5} />
        <AnchorLink>LogIn</AnchorLink>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
