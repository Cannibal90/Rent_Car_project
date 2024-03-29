import styled from "styled-components";

export const Icon = styled.div`
  width: 100%;
  height: 52px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 30px;
  text-align: center;
  padding-top: 5px;
  border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  cursor: pointer;
`;

export const InputButton = styled.button`
  width: 100%;
  height: 52px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 20px;
  text-align: center;
  border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  color: #000;
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(127, 94, 245);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 20px;
  text-align: center;
  border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:disabled {
    &::placeholder {
      color: #000;
    }
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(127, 94, 245);
  }

  &:checked {
    height: 30px;
    margin-left: 0;
    margin-right: 0;
  }
  &:not(:checked) {
  }
`;

export const Info = styled.div`
  width: 100%;
  height: 32px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 20px;
  text-align: center;
  border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
`;

export const WeightInfo = styled.div`
  width: 100%;
  height: 32px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 20px;
  text-align: center;
  border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  font-weight: 600;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 14px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const Title = styled.h2`
  margin: 0;
  color: #000;
  font-weight: 600;
  font-size: 30px;
`;

export const CommonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10%;
`;
export const WidthContainer = styled.div`
  width: 100%;
`;

export const CarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0;
  flex-wrap: wrap;
`;

export const CarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1%;
  z-index: 1;
`;
