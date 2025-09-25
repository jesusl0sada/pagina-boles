import { Button } from "@/components/ui/button";
import heroBowl from "@/assets/hero-bowl.jpg";

interface HeroProps {
  language: 'es' | 'en';
}

const Hero = ({ language }: HeroProps) => {
  const translations = {
    es: {
      title: "Bowl Collection",
      description: "Explora nuestra colección de bowls que combina estilo y practicidad, perfectos para cualquier mesa.",
      cta: "Explorar Colección"
    },
    en: {
      title: "Bowl Collection", 
      description: "Explore our collection of bowls that combines style and practicality, perfect for any table.",
      cta: "Explore Collection"
    }
  };

  const t = translations[language];

  return (
    <section id="home" className="min-h-screen flex items-center bg-background pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-lg">
              {t.description}
            </p>
            <div className="pt-4">
              <Button size="lg" className="text-lg px-8 py-6">
                {t.cta}
              </Button>
            </div>
          </div>

          {/* Right side - Hero image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-light">
              <img 
                src={heroBowl}
                alt="Featured bowl from our collection"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;