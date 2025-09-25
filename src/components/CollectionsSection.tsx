import bowlSet1 from "@/assets/bowl-set-1.jpg";
import bowlColorful from "@/assets/bowl-colorful.jpg";
import collectionClassic from "@/assets/collection-classic.jpg";

interface CollectionsSectionProps {
  language: 'es' | 'en';
}

const CollectionsSection = ({ language }: CollectionsSectionProps) => {
  const translations = {
    es: {
      title: "Colecciones",
      subtitle: "Descubre nuestras colecciones cuidadosamente curadas",
      collections: [
        {
          title: "Minimalistas",
          description: "Diseños limpios y líneas simples para un estilo contemporáneo"
        },
        {
          title: "Coloridos", 
          description: "Vibrantes tonos que alegran cualquier mesa"
        },
        {
          title: "Clásicos",
          description: "Elegancia atemporal que nunca pasa de moda"
        }
      ]
    },
    en: {
      title: "Collections",
      subtitle: "Discover our carefully curated collections",
      collections: [
        {
          title: "Minimalist",
          description: "Clean designs and simple lines for a contemporary style"
        },
        {
          title: "Colorful",
          description: "Vibrant tones that brighten any table"
        },
        {
          title: "Classic",
          description: "Timeless elegance that never goes out of style"
        }
      ]
    }
  };

  const t = translations[language];
  const collectionImages = [bowlSet1, bowlColorful, collectionClassic];

  return (
    <section id="collections" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.collections.map((collection, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <div className="aspect-square bg-neutral-light">
                  <img 
                    src={collectionImages[index]}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-light tracking-tight text-foreground mb-3">
                  {collection.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;