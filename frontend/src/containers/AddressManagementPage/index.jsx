import {
  InnerPageContainer,
  PageContainer,
} from "../../components/PageContainer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Addresses } from "./addresses";
import { useParams } from "react-router";

export function AddressManagementPage(props) {
  const { id } = useParams();
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <Addresses userId={id} />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
