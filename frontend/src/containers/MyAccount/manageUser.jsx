import { ContentContainer, Info } from "../../components/Cards";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { UserCard } from "../../components/userCard";

const UserContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10%;
`;

export function ManageUser(props) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const token = `Bearer ${user.token}`;
  const [userFromDb, setUserFromDb] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/user/" + user.id, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json ",
        },
      })
      .then((response) => {
        console.log("Response: ", response.data);
        setUserFromDb(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error: ", error.response);
      });
  }, [token, user.id]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <UserContainer>
      <ContentContainer>
        <Info>id</Info>
        <Info>username</Info>
        <Info>email</Info>
        <Info>firstname</Info>
        <Info>lastname</Info>
        <Info>password</Info>
        <Info>role</Info>
        <Info>edit</Info>
        <Info>addresses</Info>
        <Info>delete</Info>
      </ContentContainer>
      <UserCard
        key={userFromDb.id}
        id={userFromDb.id}
        username={userFromDb.username}
        email={userFromDb.email}
        password={userFromDb.password}
        firstname={userFromDb.firstname}
        lastname={userFromDb.lastname}
        role={userFromDb.role}
      />
    </UserContainer>
  );
}
