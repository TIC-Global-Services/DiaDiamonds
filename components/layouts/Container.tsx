// components/layout/Container.tsx

export default function ContainerLayout({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}