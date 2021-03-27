import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left; //tutaj bylo center
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 17px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 17px;
  color: rgb(127, 94, 245);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Valid = styled.h5`
  color: #dd1a1a;
  font-weight: 500;
  font-size: 15px;
  z-index: 10;
  margin: 0;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 22px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(127, 94, 245);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(127, 94, 245);
  background: linear-gradient(
    90deg,
    rgba(127, 94, 245, 1) 0%,
    rgba(117, 83, 241, 1) 35%
  );
  &:hover {
    filter: brightness(1.03);
  }
`;
