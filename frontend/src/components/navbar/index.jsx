import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../../components/button";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";
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

const AnchorLink = styled(Link)`
  font-size: 25px;
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
  const isLogged = localStorage.getItem("isLogged");
  const user = JSON.parse(localStorage.getItem("currentUser"));
  // console.log("user curr: ", user);
  const role = user ? user.role : null;

  var logOut = function () {
    localStorage.clear();
  };

  return (
    <NavbarContainer useTransparent={useTransparent}>
      <AccessibilityContainer>
        <Link to="/">
          <BrandLogo />
        </Link>
        {isLogged === "true" && (
          <>
            <Link to="/cars">
              <Button size={25} paddingW={2} paddingH={3}>
                Oferta
              </Button>
            </Link>
            <Marginer direction="horizontal" margin={5} />
            <Link to="/history">
              <Button size={25} paddingW={2} paddingH={3}>
                Historia
              </Button>
            </Link>
            <Marginer direction="horizontal" margin={5} />
            <Link to="/FAQ">
              <Button size={25} paddingW={2} paddingH={3}>
                FAQ
              </Button>
            </Link>
          </>
        )}
      </AccessibilityContainer>

      <AccessibilityContainer>
        {isLogged == null && (
          <>
            <Link to="/signup">
              <Button size={25} paddingW={2} paddingH={3}>
                Register
              </Button>
            </Link>
            <Marginer direction="horizontal" margin={5} />
            <AnchorLink to="/signin">LogIn</AnchorLink>
          </>
        )}
        {role === "ROLE_ADMIN" && (
          <>
            <Link to="/manage">
              <Button size={25} paddingW={2} paddingH={3}>
                Panel zarządzania
              </Button>
            </Link>
            <Marginer direction="horizontal" margin={5} />
          </>
        )}
        {isLogged === "true" && (
          <>
            <Link to="/">
              <Button onClick={logOut} size={25} paddingW={2} paddingH={3}>
                LogOut
              </Button>
            </Link>
          </>
        )}
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
