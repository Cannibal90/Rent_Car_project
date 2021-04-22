import {
  ContentContainer,
  Info,
  CommonContainer,
} from "../../components/Cards";
import { useState, useEffect } from "react";
import { UserCard } from "../../components/userCard";
import { getSelectedUser } from "../../_userFunctions";

export function ManageUser(props) {
  const [userFromDb, setUserFromDb] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getSelectedUser().then((res) => {
      setUserFromDb(res);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <CommonContainer>
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
    </CommonContainer>
  );
}
