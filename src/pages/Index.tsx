import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { QRSection } from "@/components/QRSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <QRSection />
      <Footer />
    </main>
  );
};

export default Index;
