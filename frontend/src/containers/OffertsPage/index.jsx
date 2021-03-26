import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";
import { Navbar } from "../../components/navbar";
import { Cars } from "../OffertsPage/cars";

export function OffertsPage(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <Cars />
      </InnerPageContainer>
    </PageContainer>
  );
}
