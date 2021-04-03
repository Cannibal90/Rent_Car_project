import React, { useState } from "react";
import styled from "styled-components";

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

const ListItem = styled.li`
  width: 100%;
  height: 32px;
  outline: none;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 20px;
  text-align: center;
  border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  color: #000;
  list-style: none;
  position: relative;
  cursor: pointer;
`;

const DropList = styled.ul`
  padding: 1em 1em;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  position: absolute;
`;

const MainContainer = styled.div`
  width: 100%;
`;

export function DropdownList(props) {
  const { items, selected, disabled, handler } = props;
  const [show, setShow] = useState(false);
  const [option, setOption] = useState(selected);

  var showOptions = function () {
    setShow(!show);
  };

  var changeOption = function (item) {
    setOption(item.item);
    handler(item.item);
    setShow(false);
  };
  return (
    <MainContainer>
      <InputButton onClick={() => showOptions()} disabled={disabled}>
        {option}
      </InputButton>

      {show && (
        <DropList>
          {items.map((item) => (
            <ListItem key={item} onClick={() => changeOption({ item })}>
              {item}
            </ListItem>
          ))}
        </DropList>
      )}
    </MainContainer>
  );
}
