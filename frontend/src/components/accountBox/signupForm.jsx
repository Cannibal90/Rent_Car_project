import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
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

  var register = function () {
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
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="Firstname"
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="Lastname"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
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
