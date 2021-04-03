import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { ManageUser } from "./manageUser";

export function MyAccount(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <ManageUser />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
