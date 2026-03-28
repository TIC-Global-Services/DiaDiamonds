
export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full min-h-screen px-6 md:px-20 py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}