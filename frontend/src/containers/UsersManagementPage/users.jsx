import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { UserCard } from "../../components/userCard";
import { Info, ContentContainer, Title } from "../../components/Cards";
import { getAllUsers } from "../../_userFunctions";

const UserContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10%;
`;

export function Users(props) {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getAllUsers().then((res) => setUserList(res));
  }, []);

  return (
    <UserContainer>
      <ContentContainer>
        <Title>Users</Title>
      </ContentContainer>
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
