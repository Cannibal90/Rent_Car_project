import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { ManageOrders } from "./orders";

export function OrdersManagementPage(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <ManageOrders />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
