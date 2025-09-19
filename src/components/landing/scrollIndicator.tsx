export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-7 h-11 border-3 border-muted-foreground/75 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-muted-foreground/75 rounded-full mt-2"></div>
      </div>
    </div>
  );
}
