import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  Valid,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from "axios";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState([]);

  var register = function () {
    setValidation([]);
    axios
      .post(
        "http://localhost:8080/api/user/save",
        {
          username: username,
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          role: "ROLE_USER",
        },
        { headers: { "Content-Type": "application/json " } }
      )
      .then((response) => {
        console.log("Response: ", response);
        switchToSignin();
      })
      .catch((error) => {
        setValidation(error.response.data.validationErrors);
        console.log(error.response.data.validationErrors);
      });
  };

  return (
    <BoxContainer>
      {validation.username !== undefined && (
        <Valid>{validation.username}</Valid>
      )}
      <FormContainer>
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        {validation.firstname !== undefined && (
          <Valid>{validation.firstname}</Valid>
        )}
        <Input
          type="text"
          placeholder="Firstname"
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
        {validation.lastname !== undefined && (
          <Valid>{validation.lastname}</Valid>
        )}
        <Input
          type="text"
          placeholder="Lastname"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        {validation.email !== undefined && <Valid>{validation.email}</Valid>}
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {validation.password !== undefined && (
          <Valid>{validation.password}</Valid>
        )}
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {/* <Input type="password" placeholder="Confirm Password" /> */}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={register}>
        Signup
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
