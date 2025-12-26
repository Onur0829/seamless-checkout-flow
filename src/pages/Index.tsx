import { useState } from 'react';
import OnlaLogo from '@/components/OnlaLogo';
import PlanToggle from '@/components/PlanToggle';
import PackageCard from '@/components/PackageCard';
import CreditSlider from '@/components/CreditSlider';
import PhoneNumberOption from '@/components/PhoneNumberOption';
import OrderSummary from '@/components/OrderSummary';

const packages = [
  {
    id: 'starter',
    name: 'Sınırsız S',
    price: 299,
    includedMinutes: 2000,
    overageRate: 0.13,
  },
  {
    id: 'growth',
    name: 'Sınırsız M',
    price: 699,
    includedMinutes: 5000,
    overageRate: 0.12,
    isPopular: true,
  },
  {
    id: 'scale',
    name: 'Sınırsız L',
    price: 1299,
    includedMinutes: 10000,
    overageRate: 0.11,
  },
];

const getRate = (minutes: number): number => {
  if (minutes <= 2500) return 0.14;
  if (minutes <= 7000) return 0.13;
  return 0.12;
};

const PHONE_FEE = 50;

const Index = () => {
  const [planType, setPlanType] = useState<'unlimited' | 'prepaid'>('unlimited');
  const [selectedPackage, setSelectedPackage] = useState('growth');
  const [minutes, setMinutes] = useState(2500);
  const [includePhone, setIncludePhone] = useState(false);

  const currentPackage = packages.find((p) => p.id === selectedPackage);

  return (
    <div className="min-h-screen bg-background">
      {/* Background subtle pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--muted))_0%,transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--muted)/0.5)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-up">
          <div className="flex justify-center mb-8">
            <OnlaLogo />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Planınızı Seçin
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            İhtiyaçlarınıza en uygun planı seçin ve hemen başlayın
          </p>
        </header>

        {/* Plan Toggle */}
        <div className="flex justify-center mb-12 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <PlanToggle selected={planType} onChange={setPlanType} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Options */}
          <div className="lg:col-span-2 space-y-6">
            {/* Plan Options */}
            <div
              className="transition-all duration-500"
              style={{
                opacity: 1,
                transform: 'translateY(0)',
              }}
            >
              {planType === 'unlimited' ? (
                <div className="grid sm:grid-cols-3 gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  {packages.map((pkg) => (
                    <PackageCard
                      key={pkg.id}
                      name={pkg.name}
                      price={pkg.price}
                      includedMinutes={pkg.includedMinutes}
                      overageRate={pkg.overageRate}
                      isPopular={pkg.isPopular}
                      isSelected={selectedPackage === pkg.id}
                      onSelect={() => setSelectedPackage(pkg.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  <CreditSlider value={minutes} onChange={setMinutes} />
                </div>
              )}
            </div>

            {/* Phone Number Option */}
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <PhoneNumberOption
                checked={includePhone}
                onChange={setIncludePhone}
                extraFee={PHONE_FEE}
              />
            </div>
          </div>

          {/* Right: Summary */}
          <div className="lg:col-span-1 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="lg:sticky lg:top-8">
              <OrderSummary
                planType={planType}
                packageName={currentPackage?.name}
                packagePrice={currentPackage?.price}
                minutes={minutes}
                minuteRate={getRate(minutes)}
                includePhone={includePhone}
                phoneFee={PHONE_FEE}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <p>Güvenli ödeme • İstediğiniz zaman iptal edin • 7/24 destek</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
