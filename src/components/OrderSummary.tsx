import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface OrderSummaryProps {
  planType: 'unlimited' | 'prepaid';
  packageName?: string;
  packagePrice?: number;
  minutes?: number;
  minuteRate?: number;
  includePhone: boolean;
  phoneFee: number;
}

const OrderSummary = ({
  planType,
  packageName,
  packagePrice,
  minutes,
  minuteRate,
  includePhone,
  phoneFee,
}: OrderSummaryProps) => {
  const basePrice = planType === 'unlimited' 
    ? (packagePrice || 0) 
    : (minutes || 0) * (minuteRate || 0);
  const phoneAmount = includePhone ? phoneFee : 0;
  const subtotal = basePrice + phoneAmount;
  const tax = subtotal * 0.10;
  const total = subtotal + tax;

  const handleCheckout = () => {
    const payload = {
      mode: planType,
      ...(planType === 'unlimited' 
        ? { selectedPackage: packageName, basePrice: packagePrice }
        : { selectedMinutes: minutes, rate: minuteRate }
      ),
      phoneSelected: includePhone,
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
    };
    
    console.log('Checkout Payload:', payload);
    alert(`Checkout Payload:\n${JSON.stringify(payload, null, 2)}`);
  };

  return (
    <div className="glass-card p-6 ai-glow">
      <h3 className="text-lg font-semibold mb-6">Sipariş Özeti</h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center py-2">
          <span className="text-muted-foreground">Plan Türü</span>
          <span className="font-medium">{planType === 'unlimited' ? 'Sınırsız' : 'Kontörlü'}</span>
        </div>
        
        {planType === 'unlimited' && packageName && (
          <div className="flex justify-between items-center py-2">
            <span className="text-muted-foreground">Paket</span>
            <span className="font-medium">{packageName}</span>
          </div>
        )}
        
        {planType === 'prepaid' && minutes && minuteRate && (
          <>
            <div className="flex justify-between items-center py-2">
              <span className="text-muted-foreground">Dakika</span>
              <span className="font-medium">{minutes.toLocaleString()} dk</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-muted-foreground">Birim Fiyat</span>
              <span className="font-medium">${minuteRate.toFixed(2)}/dk</span>
            </div>
          </>
        )}
        
        <div className="flex justify-between items-center py-2">
          <span className="text-muted-foreground">
            {planType === 'unlimited' ? 'Aylık Ücret' : 'Dakika Ücreti'}
          </span>
          <span className="font-medium">${basePrice.toFixed(2)}</span>
        </div>
        
        {includePhone && (
          <div className="flex justify-between items-center py-2">
            <span className="text-muted-foreground">Telefon Numarası</span>
            <span className="font-medium">+${phoneAmount.toFixed(2)}</span>
          </div>
        )}
      </div>
      
      <div className="border-t border-border pt-4 mb-6 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Ara Toplam</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Vergi (10%)</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-border">
          <span className="text-lg font-semibold">Toplam</span>
          <span className="text-2xl font-bold">${total.toFixed(2)}</span>
        </div>
        {planType === 'unlimited' && (
          <p className="text-xs text-muted-foreground">aylık faturalandırılır</p>
        )}
      </div>
      
      <Button 
        onClick={handleCheckout}
        className="w-full h-12 text-base font-medium group" 
        size="lg"
      >
        Ödemeye Geç
        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
};

export default OrderSummary;
