import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { CarToAdd } from "./carToAdd";

export function AddCarPage(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <CarToAdd />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
