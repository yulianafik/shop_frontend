import Button from "./Button";
import Badge from "./Badge";

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  imageMode?: "cover" | "contain";
  imagePosition?:
    | "center"
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "left-top"
    | "right-top";
  badge?: string;
  badgeVariant?: "default" | "success" | "warning" | "error" | "info";
  buttonText?: string;
  buttonVariant?: "primary" | "secondary";
  onButtonClick?: () => void;
  children?: React.ReactNode;
  square?: boolean;
}

export default function Card({
  title,
  description,
  image,
  imageMode = "cover",
  imagePosition = "center",
  badge,
  badgeVariant = "info",
  buttonText,
  buttonVariant = "primary",
  onButtonClick,
  children,
  square = false,
}: CardProps) {
  const styles = {
    card: `bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 ${
      square ? "aspect-[3/4] w-full" : ""
    }`,
    imageContainer: `relative w-full overflow-hidden bg-gray-100 ${
      square ? "aspect-square" : "h-48"
    }`,
    image: `w-full h-full ${
      imageMode === "cover" ? "object-cover" : "object-contain"
    } object-${imagePosition}`,
    badgeContainer: "absolute top-3 right-3",
    content: "p-3",
    title: "text-xl font-bold text-gray-900 mb-2",
    description: "text-gray-600 mb-4",
  };

  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
          {badge && (
            <div className={styles.badgeContainer}>
              <Badge variant={badgeVariant} size="md">
                {badge}
              </Badge>
            </div>
          )}
        </div>
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
        {children}
        {buttonText && (
          <Button
            variant={buttonVariant}
            onClick={onButtonClick}
            size="md"
            fullWidth
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
}
