type GiuvaLogoVariant = "default" | "white";

const logoByVariant: Record<GiuvaLogoVariant, string> = {
  default: "/brand/giuva-logo.svg",
  white: "/brand/giuva/GIUVA_white.svg"
};

type GiuvaLogoProps = {
  variant?: GiuvaLogoVariant;
  className?: string;
  height?: number;
};

export function GiuvaLogo({ variant = "default", className = "", height = 40 }: GiuvaLogoProps) {
  const width = Math.round(height * 2.85);

  return (
    <img
      src={logoByVariant[variant]}
      alt="GIUVA - Global Initiative for Urban Volunteering & Awareness"
      width={width}
      height={height}
      decoding="async"
      className={className}
    />
  );
}
