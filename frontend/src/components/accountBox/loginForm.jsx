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
import { axios } from "axios";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  var getAuth = function () {
    console.log("tez");

    //   axios
    //     .post("localhost:8080/api/auth", {
    //       name: username,
    //       password: password,
    //     })
    //     .then((response) => {
    //       console.log("Response: ", response);
    //     })
    //     .catch((error) => {
    //       console.log("Error: ", error);
    //     });
  };

  return (
    <BoxContainer>
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
