import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faSave,
  faAddressBook,
} from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { useState } from "react";
import { Icon, Input, ContentContainer, TopContainer } from "../Cards";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export function UserCard(props) {
  const { id, username, email, password, firstname, lastname, role } = props;
  const [disable, setDisable] = useState(true);
  const [newUsername, setNewUsername] = useState(username);
  const [newPassword, setNewPassword] = useState(password);
  const [newFirstname, setNewFirstname] = useState(firstname);
  const [newLastname, setNewLastname] = useState(lastname);
  const [newEmail, setNewEmail] = useState(email);
  const [newRole, setNewRole] = useState(role);
  const [show, setShow] = useState(false);
  const [body, setBody] = useState("");
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const token = `Bearer ${user.token}`;

  var DeleteUser = function (id) {
    axios
      .delete("http://localhost:8080/api/user/delete/" + id, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json ",
        },
      })
      .then((response) => {
        console.log("Response: ", response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log("Error: ", error.response);
      });
  };

  var updateUser = function (id) {
    setDisable(false);
  };

  var modifyUserAddresses = function (id) {
    window.location = `/manage/address/${id}`;
  };

  var saveUser = function (id) {
    axios
      .put(
        "http://localhost:8080/api/user/update/" + id,
        {
          id: id,
          username: newUsername,
          firstname: newFirstname,
          lastname: newLastname,
          email: newEmail,
          password: newPassword,
          role: newRole,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json ",
          },
        }
      )
      .then((response) => {
        console.log("Response: ", response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log("Error: ", error.response.data);
        setBody(error.response.data.message);
        setShow(true);
      });

    setDisable(true);
  };

  const handleClose = () => setShow(false);

  return (
    <TopContainer>
      <Dialog
        open={show}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Something gone wrong..."}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <ContentContainer>
        <Input type="text" placeholder={id} disabled={true} />
        <Input
          type="text"
          placeholder={username}
          onChange={(e) => {
            setNewUsername(e.target.value);
          }}
          disabled={disable ? true : ""}
        />
        <Input
          type="text"
          placeholder={email}
          onChange={(e) => {
            setNewEmail(e.target.value);
          }}
          disabled={disable ? true : ""}
        />
        <Input
          type="text"
          placeholder={firstname}
          onChange={(e) => {
            setNewFirstname(e.target.value);
          }}
          disabled={disable ? true : ""}
        />
        <Input
          type="text"
          placeholder={lastname}
          onChange={(e) => {
            setNewLastname(e.target.value);
          }}
          disabled={disable ? true : ""}
        />
        <Input
          type="text"
          placeholder="********"
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
          disabled={disable ? true : ""}
        />
        <Input
          type="text"
          placeholder={role}
          onChange={(e) => {
            setNewRole(e.target.value);
          }}
          disabled={disable ? true : ""}
        />
        {disable ? (
          <Icon>
            <FontAwesomeIcon icon={faEdit} onClick={() => updateUser(id)} />
          </Icon>
        ) : (
          <Icon>
            <FontAwesomeIcon icon={faSave} onClick={() => saveUser(id)} />
          </Icon>
        )}

        <Icon>
          <FontAwesomeIcon
            icon={faAddressBook}
            onClick={() => modifyUserAddresses(id)}
          />
        </Icon>

        <Icon>
          <FontAwesomeIcon icon={faTrashAlt} onClick={() => DeleteUser(id)} />
        </Icon>
      </ContentContainer>
    </TopContainer>
  );
}
