import React from "react";
import { useParams } from "react-router";
import { AccountBox } from "../../components/accountBox";
import { Navbar } from "../../components/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";

export function CustomerAccessPage(props) {
  const { action } = useParams();
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <AccountBox initialActive={action} />
      </InnerPageContainer>
    </PageContainer>
  );
}
