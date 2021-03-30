import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

export function UsersManagementPage(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>users</InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
