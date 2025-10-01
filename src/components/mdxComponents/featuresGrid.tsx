type Feature = {
  icon: string;
  title: string;
  description: string;
};

type FeatureGridProps = {
  features: Feature[];
};

export function FeaturesGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white/5 dark:bg-black/20 border border-white/10 rounded-lg p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          <span className="text-2xl block mb-3">{feature.icon}</span>
          <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
          <p className="text-gray-500 dark:text-gray-400">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
