import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { ManageOfferts } from "./manage";

export function ManagementPage(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <ManageOfferts />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
