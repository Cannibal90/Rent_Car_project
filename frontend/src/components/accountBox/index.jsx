import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm.jsx";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";

const BoxContainer = styled.div`
  width: 480px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  margin-top: 4%;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(127, 94, 245);
  background: linear-gradient(
    90deg,
    rgba(127, 94, 245, 1) 0%,
    rgba(117, 83, 241, 1) 35%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40%;
`;

const HeaderText = styled.h2`
  font-size: 50px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 21px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "203%",
    height: "1230px",
    borderRadius: "30%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "150%",
    height: "650px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const { initialActive } = props;
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState(
    initialActive ? initialActive : "signin"
  );

  const playExpandingEffect = () => {
    setExpanded(true);
    /*
      Collapse it after short amount of time
      To Finish transition 
    */
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchActive = (active) => {
    setTimeout(() => setActive(active), 400);
  };

  const switchToSignup = () => {
    playExpandingEffect();
    switchActive("signup");
  };

  const switchToSignin = () => {
    playExpandingEffect();
    switchActive("signin");
  };

  const contextValue = {
    switchToSignup,
    switchToSignin,
    playExpandingEffect,
  };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            variants={backdropVariants}
            transition={expandingTransition}
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
          />
          {active === "signin" && (
            <>
              <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
                <SmallText>Please sign-in to continue!</SmallText>
              </HeaderContainer>
            </>
          )}
          {active === "signup" && (
            <>
              <HeaderContainer>
                <HeaderText>Create </HeaderText>
                <HeaderText>Account</HeaderText>
                <SmallText>Please sign-up to continue!</SmallText>
              </HeaderContainer>
            </>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
