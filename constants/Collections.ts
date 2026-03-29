// constants/navigation.ts

 export const NAV_ITEMS = [
    { label: "Home", href: "/" },
    {
      label: "Collections",
      href: "/collections",
      children: [
        { label: "Rings", href: "/collections/rings" },
        { label: "Earrings", href: "/collections/earrings" },
        { label: "Necklaces", href: "/collections/necklaces" },
        { label: "Bracelets", href: "/collections/bracelets" },
      ],
    },
    { label: "Precision", href: "/precision" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];