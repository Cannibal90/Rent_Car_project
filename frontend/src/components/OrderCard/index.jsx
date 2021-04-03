import React from "react";
import { Icon, Input, ContentContainer, TopContainer } from "../Cards";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faSave,
} from "@fortawesome/free-regular-svg-icons";
import { DropdownList } from "../dropdownList";

export function OrderCard(props) {
  const { id, status, paymentType, amount, paymentDate } = props;
  const [disable, setDisable] = useState(true);
  const [newStatus, setNewStatus] = useState(status);
  const [newPaymentType, setNewPaymentType] = useState(paymentType);
  const [newAmount, setNewAmount] = useState(amount);
  const [newPaymentDate, setNewPaymentDate] = useState(paymentDate);

  var modifyOrder = function () {
    setDisable(false);
  };

  var saveOrder = function () {
    setDisable(true);
  };

  var deleteOrder = function () {
    console.log("delete");
  };
  var statusOption = [
    "Verification",
    "Wating for payment",
    "Implementation",
    "Delivered",
  ];
  var paymentTypes = ["Bank transfer", "Cash", "Payment card"];
  return (
    <TopContainer>
      <ContentContainer>
        <Input type="text" placeholder={id} disabled={true} />
        <DropdownList
          items={statusOption}
          selected={status}
          handler={setNewStatus}
          disabled={disable ? true : ""}
        />
        <DropdownList
          items={paymentTypes}
          selected={paymentType}
          handler={setNewPaymentType}
          disabled={disable ? true : ""}
        />
        <Input
          type="text"
          placeholder={amount}
          onChange={(e) => {
            setNewAmount(e.target.value);
          }}
          disabled={disable ? true : ""}
        />
        <Input
          type="text"
          placeholder={paymentDate}
          onChange={(e) => {
            setNewPaymentDate(e.target.value);
          }}
          disabled={disable ? true : ""}
        />
        {disable ? (
          <Icon>
            <FontAwesomeIcon icon={faEdit} onClick={() => modifyOrder()} />
          </Icon>
        ) : (
          <Icon>
            <FontAwesomeIcon icon={faSave} onClick={() => saveOrder()} />
          </Icon>
        )}

        <Icon>
          <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteOrder()} />
        </Icon>
      </ContentContainer>
    </TopContainer>
  );
}
