interface PlanToggleProps {
  selected: 'unlimited' | 'prepaid';
  onChange: (plan: 'unlimited' | 'prepaid') => void;
}

const PlanToggle = ({ selected, onChange }: PlanToggleProps) => {
  return (
    <div className="toggle-container">
      <div
        className="toggle-indicator"
        style={{
          left: selected === 'unlimited' ? '4px' : '50%',
          width: 'calc(50% - 4px)',
        }}
      />
      <button
        onClick={() => onChange('unlimited')}
        className={`toggle-option ${selected === 'unlimited' ? 'active' : 'text-muted-foreground'}`}
      >
        Sınırsız
      </button>
      <button
        onClick={() => onChange('prepaid')}
        className={`toggle-option ${selected === 'prepaid' ? 'active' : 'text-muted-foreground'}`}
      >
        Kontörlü
      </button>
    </div>
  );
};

export default PlanToggle;
