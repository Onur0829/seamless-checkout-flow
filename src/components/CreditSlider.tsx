import { Slider } from '@/components/ui/slider';

interface CreditSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const CreditSlider = ({ value, onChange }: CreditSliderProps) => {
  const marks = [500, 2500, 5000, 7500, 10000];
  
  return (
    <div className="glass-card p-8">
      <div className="text-center mb-8">
        <p className="text-muted-foreground text-sm mb-2">Seçilen Kontör</p>
        <div className="price-display">{value.toLocaleString('tr-TR')}</div>
        <p className="text-muted-foreground text-sm mt-1">kontör</p>
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
              {mark.toLocaleString('tr-TR')}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Kontör Ücreti</span>
          <span className="font-semibold">₺{(value * 0.05).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CreditSlider;
