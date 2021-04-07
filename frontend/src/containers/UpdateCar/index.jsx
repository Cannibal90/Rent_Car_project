import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { useParams } from "react-router";
import { GetCar } from "./getCar";

export function UpdateCarPage(props) {
  const { id } = useParams();

  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <GetCar id={id} />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
