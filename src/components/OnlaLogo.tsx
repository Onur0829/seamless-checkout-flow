const OnlaLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">O</span>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-muted-foreground/20 rounded-full animate-pulse" />
      </div>
      <span className="text-2xl font-semibold tracking-tight">Onla</span>
    </div>
  );
};

export default OnlaLogo;
