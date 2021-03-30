import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

export function MyAccount(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>ala ma kota</InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
