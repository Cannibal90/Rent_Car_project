import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { BasketOrders } from "./basket";

export function Basket(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <BasketOrders />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
