import { Check } from 'lucide-react';

interface PackageCardProps {
  name: string;
  price: number;
  includedMinutes: number;
  overageRate: number;
  isPopular?: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

const PackageCard = ({ 
  name, 
  price, 
  includedMinutes, 
  isPopular, 
  isSelected, 
  onSelect 
}: PackageCardProps) => {
  return (
    <div
      onClick={onSelect}
      className={`option-card ${isSelected ? 'selected' : ''}`}
    >
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        {isPopular && (
          <div className="bg-primary text-primary-foreground text-xs font-medium px-2 py-0.5 rounded-full">
            Popüler
          </div>
        )}
      </div>
      <div className="mb-4">
        <span className="price-display">${price}</span>
        <span className="text-muted-foreground text-sm">/ay</span>
      </div>
      <ul className="space-y-2">
        <li className="flex items-center gap-2 text-sm text-muted-foreground">
          <Check className="w-4 h-4 text-primary" />
          {includedMinutes.toLocaleString('tr-TR')} dakika dahil
        </li>
      </ul>
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-primary transition-transform duration-300 origin-left ${isSelected ? 'scale-x-100' : 'scale-x-0'}`} />
    </div>
  );
};

export default PackageCard;
