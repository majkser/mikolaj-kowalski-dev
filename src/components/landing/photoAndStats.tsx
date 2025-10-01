import Image from 'next/image';
import photoCV from '../../../public/photo-CV.png';

export default function PhotoAndStats() {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative">
        {/* Photo Placeholder */}
        <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-border/50 flex items-center justify-center shadow-2xl">
          <div className="relative overflow-hidden transition-all duration-300 rounded-xl group">
            <Image
              src={photoCV}
              alt="Mikołaj Kowalski"
              className="w-72 h-72 object-cover rounded-xl transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-xl border-4 border-transparent group-hover:border-primary/70 transition-all duration-300"></div>
          </div>
        </div>
        <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">1+</div>
            <div className="text-xs text-muted-foreground">Years Exp</div>
          </div>
        </div>
      </div>
    </div>
  );
}
