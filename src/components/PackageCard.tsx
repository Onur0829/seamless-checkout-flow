import { Check } from 'lucide-react';

interface PackageCardProps {
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

const PackageCard = ({ name, price, features, isPopular, isSelected, onSelect }: PackageCardProps) => {
  return (
    <div
      onClick={onSelect}
      className={`option-card ${isSelected ? 'selected' : ''}`}
    >
      {isPopular && (
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
          Popüler
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <div className="mb-4">
        <span className="price-display">₺{price}</span>
        <span className="text-muted-foreground text-sm">/ay</span>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary" />
            {feature}
          </li>
        ))}
      </ul>
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-primary transition-transform duration-300 origin-left ${isSelected ? 'scale-x-100' : 'scale-x-0'}`} />
    </div>
  );
};

export default PackageCard;
