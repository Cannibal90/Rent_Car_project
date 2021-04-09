import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { HistoryOrders } from "./history";

export function History(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <HistoryOrders />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
