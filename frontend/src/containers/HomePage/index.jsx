import React from "react";
import { Navbar } from "../../components/navbar";
import { makeSelectUsers } from "./selectors";

import { PageContainer } from "../../components/PageContainer";
import { TopSection } from "./topSection";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { Footer } from "../../components/footer";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));
export function HomePage(props) {
  const { users } = useSelector(stateSelector);

  console.log("user: " + users);

  return (
    <PageContainer>
      <TopSection>
        <Navbar useTransparent></Navbar>
      </TopSection>
      <Footer />
    </PageContainer>
  );
}
