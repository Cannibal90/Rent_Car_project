import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

export function CarsManagementPage(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>cars</InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
