import React from "react";
import { useParams } from "react-router";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";
import { SelectedCar } from "./car";

export function SelectedOffertPage(props) {
  const { id } = useParams();
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <SelectedCar id={id}></SelectedCar>
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
