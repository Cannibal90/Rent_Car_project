import React from "react";
import { Navbar } from "../../components/navbar";

import { PageContainer } from "../../components/PageContainer";
import { TopSection } from "./topSection";

export function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
        <Navbar useTransparent></Navbar>
      </TopSection>
    </PageContainer>
  );
}
