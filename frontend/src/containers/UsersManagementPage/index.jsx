import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Users } from "./users";

export function UsersManagementPage(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <Users />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
