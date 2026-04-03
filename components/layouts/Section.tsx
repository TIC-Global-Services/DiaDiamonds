// components/layout/Section.tsx

import clsx from "clsx";


export default function Section({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "hero";
}) {
  return (
    <section
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