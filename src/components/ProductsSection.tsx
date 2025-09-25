import ProductCard from "./ProductCard";
import bowlSet1 from "@/assets/bowl-set-1.jpg";
import bowlWhite from "@/assets/bowl-white.jpg";
import bowlBlack from "@/assets/bowl-black.jpg";
import bowlColorful from "@/assets/bowl-colorful.jpg";

interface ProductsSectionProps {
  language: 'es' | 'en';
}

const ProductsSection = ({ language }: ProductsSectionProps) => {
  const translations = {
    es: {
      title: "Nuestros Productos",
      subtitle: "Cada bowl está diseñado pensando en la funcionalidad y elegancia",
      products: [
        {
          name: "Bowl Minimalista",
          description: "Diseño limpio y moderno, perfecto para cualquier ocasión.",
          tags: ["Food grade", "Microwave safe", "Oven safe"]
        },
        {
          name: "Bowl Clásico Blanco",
          description: "Elegancia atemporal en color blanco puro.",
          tags: ["Dishwasher safe", "Food grade", "Microwave safe"]
        },
        {
          name: "Bowl Negro Mate", 
          description: "Sofisticación en acabado mate, ideal para presentaciones elegantes.",
          tags: ["Food grade", "Oven safe", "Premium finish"]
        },
        {
          name: "Colección Colorida",
          description: "Añade vida a tu mesa con esta vibrante colección de colores.",
          tags: ["Food grade", "Microwave safe", "Set of 3"]
        }
      ]
    },
    en: {
      title: "Our Products",
      subtitle: "Each bowl is designed with functionality and elegance in mind",
      products: [
        {
          name: "Minimalist Bowl",
          description: "Clean and modern design, perfect for any occasion.",
          tags: ["Food grade", "Microwave safe", "Oven safe"]
        },
        {
          name: "Classic White Bowl",
          description: "Timeless elegance in pure white color.",
          tags: ["Dishwasher safe", "Food grade", "Microwave safe"]
        },
        {
          name: "Matte Black Bowl",
          description: "Sophistication in matte finish, ideal for elegant presentations.",
          tags: ["Food grade", "Oven safe", "Premium finish"]
        },
        {
          name: "Colorful Collection",
          description: "Add life to your table with this vibrant color collection.",
          tags: ["Food grade", "Microwave safe", "Set of 3"]
        }
      ]
    }
  };

  const t = translations[language];

  const productImages = [bowlSet1, bowlWhite, bowlBlack, bowlColorful];
  const prices = [19.99, 15.99, 22.99, 45.99];
  const originalPrices = [undefined, undefined, undefined, 54.99]; // Only last product has promotion

  return (
    <section id="products" className="py-24 bg-neutral-light">
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.products.map((product, index) => (
            <ProductCard
              key={index}
              image={productImages[index]}
              name={product.name}
              price={prices[index]}
              originalPrice={originalPrices[index]}
              description={product.description}
              tags={product.tags}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;