import { Instagram, Facebook, Twitter } from "lucide-react";

interface FooterProps {
  language: 'es' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const translations = {
    es: {
      contact: "Contacto",
      email: "hello@bowlcollection.com",
      phone: "+1 (555) 123-4567",
      address: "123 Design Street, Creative City",
      navigation: "Navegación",
      home: "Inicio",
      products: "Productos",
      collections: "Colecciones",
      social: "Síguenos",
      rights: "© 2024 Bowl Collection. Todos los derechos reservados."
    },
    en: {
      contact: "Contact",
      email: "hello@bowlcollection.com", 
      phone: "+1 (555) 123-4567",
      address: "123 Design Street, Creative City",
      navigation: "Navigation",
      home: "Home",
      products: "Products", 
      collections: "Collections",
      social: "Follow Us",
      rights: "© 2024 Bowl Collection. All rights reserved."
    }
  };

  const t = translations[language];

  return (
    <footer className="bg-neutral-light border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="text-2xl font-light tracking-tight">
              Bowl<span className="text-primary">.</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {language === 'es' 
                ? "Diseños elegantes que transforman cada comida en una experiencia especial."
                : "Elegant designs that transform every meal into a special experience."
              }
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-foreground mb-4">{t.contact}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{t.email}</p>
              <p>{t.phone}</p>
              <p>{t.address}</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-medium text-foreground mb-4">{t.navigation}</h3>
            <div className="space-y-2 text-sm">
              <a href="#home" className="block text-muted-foreground hover:text-foreground transition-colors">
                {t.home}
              </a>
              <a href="#products" className="block text-muted-foreground hover:text-foreground transition-colors">
                {t.products}
              </a>
              <a href="#collections" className="block text-muted-foreground hover:text-foreground transition-colors">
                {t.collections}
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-medium text-foreground mb-4">{t.social}</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-background rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">{t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;