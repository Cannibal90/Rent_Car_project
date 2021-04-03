import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { ManageCars } from "./manageCars";

export function CarsManagementPage(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <ManageCars />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
