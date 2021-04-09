import { Navbar } from "../../components/navbar";
import { PageContainer } from "../../components/PageContainer";
import { TopSection } from "./topSection";
import { Footer } from "../../components/footer";

export function HomePage() {
  return (
    <PageContainer>
      <TopSection>
        <Navbar useTransparent></Navbar>
      </TopSection>
      <Footer />
    </PageContainer>
  );
}
