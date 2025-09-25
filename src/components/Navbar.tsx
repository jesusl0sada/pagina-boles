import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";

interface NavbarProps {
  language: 'es' | 'en';
  setLanguage: (lang: 'es' | 'en') => void;
}

const Navbar = ({ language, setLanguage }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    es: {
      home: "Inicio",
      products: "Productos", 
      collections: "Colecciones",
      contact: "Contacto"
    },
    en: {
      home: "Home",
      products: "Products",
      collections: "Collections", 
      contact: "Get in touch"
    }
  };

  const t = translations[language];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-light tracking-tight">
            Bowl<span className="text-primary">.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              {t.home}
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              {t.products}
            </a>
            <a href="#collections" className="text-foreground hover:text-primary transition-colors">
              {t.collections}
            </a>
          </div>

          {/* Right side - Language selector and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm uppercase">{language}</span>
            </button>
            <Button>{t.contact}</Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                {t.home}
              </a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors">
                {t.products}
              </a>
              <a href="#collections" className="text-foreground hover:text-primary transition-colors">
                {t.collections}
              </a>
              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                  className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm uppercase">{language}</span>
                </button>
                <Button>{t.contact}</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;