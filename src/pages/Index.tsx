import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import CollectionsSection from "@/components/CollectionsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  return (
    <div className="min-h-screen bg-background">
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <ProductsSection language={language} />
      <CollectionsSection language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
