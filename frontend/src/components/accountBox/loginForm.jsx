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

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState([]);

  var getAuth = function () {
    setValidation([]);
    axios
      .post(
        "http://localhost:8080/api/auth",
        {
          name: username,
          password: password,
        },
        { headers: { "Content-Type": "application/json " } }
      )
      .then((response) => {
        console.log("Response: ", response);
        localStorage.setItem("isLogged", true);
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        window.location = "/";
      })
      .catch((error) => {
        console.log("Error: ", error.response.data);
        setValidation(error.response.data);
      });
  };

  return (
    <BoxContainer>
      {validation !== undefined && <Valid>{validation}</Valid>}
      <FormContainer>
        <Input
          type="email"
          value={username}
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={getAuth}>
        Signin
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
