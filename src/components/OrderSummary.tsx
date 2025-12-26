import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface OrderSummaryProps {
  planType: 'unlimited' | 'prepaid';
  packageName?: string;
  packagePrice?: number;
  credits?: number;
  includePhone: boolean;
  phoneFee: number;
}

const OrderSummary = ({
  planType,
  packageName,
  packagePrice,
  credits,
  includePhone,
  phoneFee,
}: OrderSummaryProps) => {
  const basePrice = planType === 'unlimited' ? (packagePrice || 0) : (credits || 0) * 0.05;
  const phoneAmount = includePhone ? phoneFee : 0;
  const total = basePrice + phoneAmount;

  return (
    <div className="glass-card p-6 ai-glow">
      <h3 className="text-lg font-semibold mb-6">Sipariş Özeti</h3>
      
      <div className="space-y-4 mb-6">
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
        
        {planType === 'prepaid' && credits && (
          <div className="flex justify-between items-center py-2">
            <span className="text-muted-foreground">Kontör</span>
            <span className="font-medium">{credits.toLocaleString('tr-TR')} kontör</span>
          </div>
        )}
        
        <div className="flex justify-between items-center py-2">
          <span className="text-muted-foreground">
            {planType === 'unlimited' ? 'Aylık Ücret' : 'Kontör Ücreti'}
          </span>
          <span className="font-medium">₺{basePrice.toFixed(2)}</span>
        </div>
        
        {includePhone && (
          <div className="flex justify-between items-center py-2">
            <span className="text-muted-foreground">Telefon Numarası</span>
            <span className="font-medium">+₺{phoneAmount.toFixed(2)}</span>
          </div>
        )}
      </div>
      
      <div className="border-t border-border pt-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Toplam</span>
          <span className="text-2xl font-bold">₺{total.toFixed(2)}</span>
        </div>
        {planType === 'unlimited' && (
          <p className="text-xs text-muted-foreground mt-1">aylık faturalandırılır</p>
        )}
      </div>
      
      <Button className="w-full h-12 text-base font-medium group" size="lg">
        Ödemeye Geç
        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
};

export default OrderSummary;
