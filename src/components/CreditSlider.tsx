import { Slider } from '@/components/ui/slider';

interface CreditSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const getRate = (minutes: number): number => {
  if (minutes <= 2500) return 0.14;
  if (minutes <= 7000) return 0.13;
  return 0.12;
};

const CreditSlider = ({ value, onChange }: CreditSliderProps) => {
  const marks = [500, 2500, 5000, 7500, 10000];
  const rate = getRate(value);
  const totalPrice = value * rate;
  
  return (
    <div className="glass-card p-8">
      <div className="text-center mb-8">
        <p className="text-muted-foreground text-sm mb-2">Seçilen Dakika</p>
        <div className="price-display">{value.toLocaleString()} dk</div>
        <p className="text-sm mt-3 text-primary font-medium">
          Birim fiyat: ${rate.toFixed(2)}/dk
        </p>
      </div>
      
      <div className="px-4">
        <Slider
          value={[value]}
          onValueChange={(v) => onChange(v[0])}
          min={500}
          max={10000}
          step={500}
          className="w-full"
        />
        
        <div className="flex justify-between mt-4">
          {marks.map((mark) => (
            <span
              key={mark}
              className={`text-xs transition-colors ${
                value >= mark ? 'text-foreground font-medium' : 'text-muted-foreground'
              }`}
            >
              {mark.toLocaleString()}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-border space-y-3">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>Fiyatlandırma</span>
          <span>
            {value <= 2500 && '500–2,500 dk: $0.14/dk'}
            {value > 2500 && value <= 7000 && '2,500–7,000 dk: $0.13/dk'}
            {value > 7000 && '7,000–10,000 dk: $0.12/dk'}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Toplam Ücret</span>
          <span className="font-semibold">${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CreditSlider;
