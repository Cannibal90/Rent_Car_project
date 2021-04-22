import { useEffect } from "react";
import { useState } from "react";
import { UserCard } from "../../components/userCard";
import {
  Info,
  ContentContainer,
  Title,
  CommonContainer,
  WidthContainer,
} from "../../components/Cards";
import { getAllUsers } from "../../_userFunctions";
import Pagination from "react-bootstrap/Pagination";

export function Users(props) {
  const [userList, setUserList] = useState([]);

  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    getAllUsers(activePage, itemsPerPage).then((res) => {
      setTotalPages(res.totalPages);
      setActivePage(res.number);
      setItemsPerPage(res.size);

      setUserList(res.content);
    });
  }, [activePage, itemsPerPage]);

  let items = [];
  for (let number = 0; number < totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number + 1}
        active={number === activePage}
        onClick={() => {
          setActivePage(number);
        }}
      >
        {number + 1}
      </Pagination.Item>
    );
  }

  return (
    <WidthContainer>
      <CommonContainer>
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
      </CommonContainer>

      <Pagination style={{ justifyContent: "center" }} size="lg">
        {items}
      </Pagination>
    </WidthContainer>
  );
}
