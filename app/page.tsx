import HeroSection from "./components/heroSection";
import SubHeroSection from "./components/subHeroSection";
import ProductsSection from "./components/productsSection";
import JoinUsSection from "./components/joinUsSection";
import TestimonialsSection from "./components/testimonialsSection";
import TabsSection from "./components/tabsSection";
import GlobeSection from "./components/globeSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection/>
      <SubHeroSection/>
      <ProductsSection/>
      <JoinUsSection/>
      <TestimonialsSection/>
      <TabsSection/>
      <GlobeSection/>
    </main>
  );
}
