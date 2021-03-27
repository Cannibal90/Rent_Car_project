import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  color: #fff;
  padding: ${({ paddingH }) => (paddingH ? paddingH + "px" : "25px")}
    ${({ paddingW }) => (paddingW ? paddingW + "em" : "8em")};
  font-size: ${({ size }) => (size ? size + "px" : "18px")};
  font-weight: 500;
  border-radius: 3px;
  background-color: #7f5ef5;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: #7553f1;
  }

  &:focus {
    outline: none;
  }
`;

export function Button(props) {
  const { onClick, size, paddingH, paddingW } = props;

  return (
    <ButtonWrapper
      onClick={onClick}
      size={size}
      paddingW={paddingW}
      paddingH={paddingH}
    >
      {props.children}
    </ButtonWrapper>
  );
}
