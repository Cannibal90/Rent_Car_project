import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";
import { Navbar } from "../../components/navbar";
import { Cars } from "../OffertsPage/cars";
import { Footer } from "../../components/footer";

export function OffertsPage(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <Cars />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
