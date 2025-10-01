import React from 'react';

type ProjectHeaderProps = {
  title: string;
  subtitle: string;
  description: string;
};

export function Header({ title, subtitle, description }: ProjectHeaderProps) {
  return (
    <div className="mb-8 border-l-4 border-primary pl-4">
      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {title}
      </h1>
      <h2 className="text-2xl mt-0 opacity-80">{subtitle}</h2>
      <div className="my-6">
        <p className="text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
