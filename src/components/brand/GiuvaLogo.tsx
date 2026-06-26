type GiuvaLogoVariant = "fullcolor" | "white" | "navy";

const logoSources: Record<GiuvaLogoVariant, string> = {
  fullcolor: "/brand/giuva/GIUVA_fullcolor.svg",
  white: "/brand/giuva/GIUVA_white.svg",
  navy: "/brand/giuva/GIUVA_navy.svg"
};

export function GiuvaLogo({
  variant,
  className,
  height
}: {
  variant: GiuvaLogoVariant;
  className?: string;
  height?: number;
}) {
  return (
    <img
      src={logoSources[variant]}
      alt="GIUVA — Global Initiative for Urban Volunteering & Awareness"
      className={className}
      style={height ? { height, width: "auto" } : { width: "auto" }}
    />
  );
}
