// components/layout/Section.tsx

import clsx from "clsx";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "hero";
  theme?: "light" | "dark" | string; // flexible for future themes
};

export default function Section({
  children,
  className,
  variant = "default",
  theme,
}: SectionProps) {
  return (
    <section
      data-theme={theme}
      className={clsx(
        "w-full",
        variant === "default" && "py-12 md:py-16 lg:py-20",
        variant === "hero" && "min-h-screen",
        className
      )}
    >
      {children}
    </section>
  );
}