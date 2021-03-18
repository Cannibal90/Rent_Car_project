import React from "react";
import { AccountBox } from "../../components/accountBox";
import { Navbar } from "../../components/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";

export function CustomerAccessPage(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <AccountBox />
      </InnerPageContainer>
    </PageContainer>
  );
}
