import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  tags: string[];
  language: 'es' | 'en';
}

const ProductCard = ({ 
  image, 
  name, 
  price, 
  originalPrice, 
  description, 
  tags, 
  language 
}: ProductCardProps) => {
  const translations = {
    es: {
      details: "Ver detalles",
      promotion: "Oferta especial: 15% off"
    },
    en: {
      details: "View details", 
      promotion: "Special weekend: 15% off"
    }
  };

  const t = translations[language];

  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-neutral-light">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-light tracking-tight text-card-foreground mb-2">
            {name}
          </h3>
          <p className="text-text-soft text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs px-3 py-1 bg-neutral-light text-text-soft border-0"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-light text-card-foreground">
                ${price.toFixed(2)}
              </span>
              {originalPrice && (
                <span className="text-sm text-text-soft line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            {originalPrice && (
              <p className="text-xs text-primary mt-1">
                {t.promotion}
              </p>
            )}
          </div>
          
          <Button variant="outline" size="sm">
            {t.details}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;