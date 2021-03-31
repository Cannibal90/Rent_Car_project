import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { UserCard } from "../../components/userCard";

const UserContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10%;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 14px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
`;
const Info = styled.div`
  width: 100%;
  height: 32px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  //padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 20px;
  text-align: center;
  border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
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
