import { ReactNode } from 'react';

export function InfoBox({ children }: { children: ReactNode }) {
  return (
    <div className="bg-primary/5 border-l-3 border-primary p-5 rounded-r-lg my-8">
      {children}
    </div>
  );
}
