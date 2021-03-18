import React from "react";
import { Navbar } from "../../components/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";

export function CustomerAccessPage(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer></InnerPageContainer>
    </PageContainer>
  );
}
