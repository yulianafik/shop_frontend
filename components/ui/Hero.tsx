import Button from "@/components/ui/Button";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryButton?: {
    text: string;
    onClick: () => void;
  };
  secondaryButton?: {
    text: string;
    onClick: () => void;
  };
  image?: React.ReactNode;
  background?: "gradient" | "solid" | "image";
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  image,
  background = "gradient",
}: HeroProps) {
  const backgrounds = {
    gradient: "bg-gradient-to-br from-blue-50 to-indigo-100",
    solid: "bg-gray-100",
    image: "bg-gray-900",
  };

  return (
    <section className={`${backgrounds[background]} py-20`}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={
            image
              ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              : "max-w-3xl mx-auto text-center"
          }
        >
          {/* Контент */}
          <div className="space-y-6">
            {subtitle && (
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                {subtitle}
              </p>
            )}

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>

            {description && (
              <p className="text-xl text-gray-600 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Изображение */}
          {image && <div className="flex items-center justify-center">{image}</div>}
        </div>
      </div>
    </section>
  );
}