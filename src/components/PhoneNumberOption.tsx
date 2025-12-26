import { Checkbox } from '@/components/ui/checkbox';
import { Phone } from 'lucide-react';

interface PhoneNumberOptionProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  extraFee: number;
}

const PhoneNumberOption = ({ checked, onChange, extraFee }: PhoneNumberOptionProps) => {
  return (
    <div
      onClick={() => onChange(!checked)}
      className={`glass-card p-5 cursor-pointer transition-all duration-300 ${
        checked ? 'border-primary bg-primary/10 ring-2 ring-primary/20' : ''
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
            checked ? 'bg-primary text-primary-foreground' : 'bg-muted'
          }`}>
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium">Telefon Numarası Ekle</p>
            <p className="text-sm text-muted-foreground">Özel telefon numarası dahil edilsin</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className={`text-sm font-medium ${checked ? 'text-primary' : ''}`}>+${extraFee.toFixed(2)}</span>
            <p className="text-xs text-muted-foreground">tek seferlik</p>
          </div>
          <Checkbox
            checked={checked}
            onCheckedChange={onChange}
            className="h-5 w-5"
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneNumberOption;
