import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

export function OrdersManagementPage(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>orders</InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
