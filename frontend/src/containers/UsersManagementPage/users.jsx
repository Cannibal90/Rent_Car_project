import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { UserCard } from "../../components/userCard";
import { Info, ContentContainer } from "../../components/Cards";

const UserContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10%;
`;

export function Users(props) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const token = `Bearer ${user.token}`;
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/user/all", {
        headers: {
          Authorization: token,
          "Content-Type": "application/json ",
        },
      })
      .then((response) => {
        console.log("Response: ", response.data);
        setUserList(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error.response);
      });
  }, [token]);

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

      {userList.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          username={user.username}
          email={user.email}
          password={user.password}
          firstname={user.firstname}
          lastname={user.lastname}
          role={user.role}
        />
      ))}
    </UserContainer>
  );
}
