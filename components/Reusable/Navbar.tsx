"use client";
import { useState, useRef, useEffect } from "react";
import Search from "../Home/Search";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from "next/link";

// Animation variants
const menuVariants: Variants = {
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.5
    }
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.5
    }
  }
};

const menuItemVariants: Variants = {
  closed: {
    opacity: 0,
    x: 50
  },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

const collectionVariants:Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const closeButtonVariants: Variants = {
  initial: { rotate: 0, scale: 1 },
  hover: {
    rotate: 90,
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.95
  }
};

export default function Navbar() {
  const [navMenuClick, setNavMenuClick] = useState<boolean>(false);
  const [collectionClick, setCollectionClick] = useState<boolean>(false);
  const [isSearch, setIsSearh] = useState<boolean>(false);
  const path = usePathname();
  const [navHideStyle, setNavHideStyle] = useState<string>('');
  const [navBarTheme, setNavBarTheme] = useState<string>("light");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[data-theme]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
            const theme = (entry.target as HTMLElement).dataset.theme;
            if (theme) {
              setNavBarTheme(theme);
            }
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "0px 0px 0px 0px"
      }
    )

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setNavHideStyle('-translate-y-[100%]');
            setIsVisible(false);
          } else {
            setNavHideStyle('translate-y-0');
            setIsVisible(true);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navMenuClick || isSearch) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [navMenuClick, isSearch])

  const sparkleImgRef = useRef<HTMLImageElement>(null);

  const logo = '/assets/img/DiaDiamondLogo.png';
  const logoBlack = '/assets/img/DiaDiamondLogoBlack.png';
  const diamond = '/assets/img/Diamond.png';

  const CaptureMousePosition = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!sparkleImgRef.current) return;

    const rect = sparkleImgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    sparkleImgRef.current.style.setProperty('--position', `${x}px ${y}px`);
  }

  const categories = [
    "rings",
    "pendants",
    "necklaces",
    "bracelets",
    "earrings"
  ];

  const navItems = [
    { name: "Collection", hasDropdown: true },
    { name: "About Us", href: "/about" },
    { name: "Precision", href: "/precision" },
    { name: "Contact Us", href: "/contact" }
  ];

  // Get current logo based on theme
  const getCurrentLogo = () => {
    // On menu open, always use black logo
    if (navMenuClick) return logoBlack;
    // Light backgrounds need black logo, dark backgrounds need white logo
    return (navBarTheme === 'light') ? logoBlack : logo;
  };

  // Get search icon color
  const getSearchIconColor = () => {
    if (navMenuClick) return '#000000';
    // Light backgrounds need black icon, dark backgrounds need white icon
    return (navBarTheme === 'light') ? '#000000' : '#FFFFFF';
  };

  return (
    <div className={`fixed top-0 right-0 left-0 z-40 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${navHideStyle}`}>

      {/* NAV MENU */}
      <AnimatePresence>
        {navMenuClick && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              onClick={() => setNavMenuClick(false)}
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="w-full lg:w-[595px] h-[100vh] bg-white fixed right-0 top-0 z-50 overflow-y-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {/* Close Button */}
              <div
                className="flex items-center justify-end ml-auto pt-8 pr-10 cursor-pointer group"
                onClick={() => setNavMenuClick(false)}
               
              >
                <div className="relative flex items-center gap-2">
                  {/* Modern X Icon */}
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300"
                  >
                    <motion.line
                      x1="6"
                      y1="6"
                      x2="26"
                      y2="26"
                      stroke="#431A1A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    />
                    <motion.line
                      x1="26"
                      y1="6"
                      x2="6"
                      y2="26"
                      stroke="#431A1A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    />
                  </svg>
                  <span className="text-[11px] text-[#000000] uppercase tracking-wider font-medium group-hover:tracking-widest transition-all duration-300">
                    Close
                  </span>
                </div>
              </div>

              {/* Menu Items */}
              <ul className="w-full pt-[63px] pl-10 pr-10">
                {/* Collection with dropdown */}
                <motion.li
                  custom={0}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  className="w-full"
                >
                  <div className={`w-full flex justify-between items-center text-[32px] leading-[110%] text-[#000000] uppercase pb-5`}>
                    <motion.p
                      className={`${collectionClick ? 'underline' : ''} hover:cursor-pointer m-0 hover:underline text-[32px] transition-all duration-300`}
                      onClick={() => setCollectionClick(!collectionClick)}
                      whileTap={{ scale: 0.98 }}
                    >
                      Collection
                    </motion.p>
                    <motion.div
                      onClick={(e) => {
                        e.stopPropagation();
                        setCollectionClick(false);
                      }}
                      className={`${collectionClick ? 'block' : 'hidden'} hover:underline w-4 border-t-2 border-[#000000] hover:cursor-pointer`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  </div>

                  {/* Collection Dropdown */}
                  <AnimatePresence>
                    {collectionClick && (
                      <motion.ul
                        variants={collectionVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.2 }}
                          className=" pb-10"
                        >
                          {categories.map((category, index) => (
                            <motion.li
                              key={category}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                              onClick={() => setNavMenuClick(false)}
                            >
                              <Link
                                href={{
                                  pathname: "/collections",
                                  query: { category }
                                }}
                                className="hover:underline text-2xl capitalize block py-1 transition-all duration-200 hover:translate-x-2"
                              >
                                {category}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.div>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>

                {/* Other Nav Items */}
                {navItems.slice(1).map((item, index) => (
                  <motion.li
                    key={item.name}
                    custom={index + 1}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    className={`text-[32px] leading-[110%] text-[#000000] uppercase hover:cursor-pointer hover:underline pb-10 ${collectionClick ? 'pt-0' : 'pt-10'}`}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setNavMenuClick(false)}
                  >
                    <Link href={item.href || ""} className="block transition-all duration-300">
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <nav className="w-full h-[94px] bg-transparent flex justify-between items-center px-10 border-0 rounded-br-xl rounded-bl-xl transition-all duration-500">

        {/* Search Button */}
        <motion.button
          className="w-[37px] aspect-square hover:cursor-pointer transition-all duration-300"
          onClick={() => setIsSearh(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill={getSearchIconColor()}
              className="transition-colors duration-500"
              d="M27.4031 26.4575L21.5294 20.425C23.2638 18.2637 24.3506 15.5325 24.3506 12.5163C24.3506 5.62875 18.8931 0 12.1638 0C5.43438 0 0 5.58125 0 12.4925C0 15.812 1.28397 18.9956 3.56945 21.3428C5.85494 23.6901 8.95471 25.0087 12.1869 25.0087C15.1237 25.0087 17.7831 23.8925 19.8875 22.1112L25.7613 28.1437C25.8659 28.2558 25.9916 28.345 26.1307 28.4059C26.2698 28.4668 26.4194 28.4982 26.5706 28.4982C26.7218 28.4982 26.8715 28.4668 27.0106 28.4059C27.1497 28.345 27.2753 28.2558 27.38 28.1437C27.8425 27.6687 27.8425 26.9325 27.38 26.4575H27.4031ZM2.3125 12.4925C2.3125 6.91125 6.72938 2.35125 12.1869 2.35125C17.6444 2.35125 22.0613 6.8875 22.0613 12.4925C22.0613 18.0975 17.6444 22.6337 12.1869 22.6337C6.72938 22.6337 2.3125 18.0975 2.3125 12.4925Z"
            />
          </svg>
        </motion.button>

        {/* LOGOS */}
        <div className="relative flex items-center justify-center gap-2 hover:cursor-pointer">

          <Link href="/">
            <motion.img
              src={diamond}
              alt="diamond"
              className="w-10 aspect-square"
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <motion.svg
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.4, 0.1, 0.8, 0], scale: [0.7, 1.1, 0.8, 1.2, 0.7] }}
              transition={{ duration: 5.5, delay: 0, repeat: Infinity, times: [0, 0.2, 0.35, 0.6, 1], ease: 'linear' }}

              className="absolute top-[-15px] left-[-25px] pointer-events-none" width="26" height="26" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_dddddd_505_3862)"><path d="M25.2002 27.7C26.9413 27.7 27.7002 26.9675 27.7002 25.2C27.7002 26.9675 28.4538 27.7 30.2002 27.7C28.4538 27.7 27.7002 28.4536 27.7002 30.2C27.7002 28.4536 26.9413 27.7 25.2002 27.7Z" fill="white" /></g><defs><filter id="filter0_dddddd_505_3862" x="0.00019455" y="-4.95911e-05" width="55.4" height="55.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="1" /><feColorMatrix type="matrix" values="1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1" /><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" /></filter></defs></motion.svg>

            <motion.svg
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.4, 0.1, 0.8, 0], scale: [0.7, 1.1, 0.8, 1, 0.7] }}
              transition={{ duration: 6, delay: 0.4, repeat: Infinity, times: [0, 0.2, 0.25, 0.6, 1], ease: "linear" }}

              className="absolute top-[-230%] left-[-90%] pointer-events-none"

              width="209" height="209" viewBox="0 0 239 239" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_dddddd_505_3861)"><path d="M108.415 119.416C116.076 119.416 119.415 116.193 119.415 108.416C119.415 116.193 122.731 119.416 130.415 119.416C122.731 119.416 119.415 122.731 119.415 130.416C119.415 122.731 116.076 119.416 108.415 119.416Z" fill="white" /></g><defs><filter id="filter0_dddddd_505_3861" x="-0.000480652" y="7.62939e-06" width="238.831" height="238.831" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="1.29066" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_505_3861" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="2.58132" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="effect1_dropShadow_505_3861" result="effect2_dropShadow_505_3861" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="9.03463" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="effect2_dropShadow_505_3861" result="effect3_dropShadow_505_3861" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="18.0693" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="effect3_dropShadow_505_3861" result="effect4_dropShadow_505_3861" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="30.9759" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="effect4_dropShadow_505_3861" result="effect5_dropShadow_505_3861" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="54.2078" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="effect5_dropShadow_505_3861" result="effect6_dropShadow_505_3861" /><feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_505_3861" result="shape" /></filter></defs>
            </motion.svg>

          </Link>


          <motion.svg
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.4, 0.1, 0.8, 0], scale: [0.7, 1.1, 0.8, 1, 0.7] }}
            transition={{ duration: 6, delay: 0.4, repeat: Infinity, times: [0, 0.2, 0.25, 0.6, 1], ease: "linear" }}

            className="absolute top-[-160%] left-[-40%] pointer-events-none"

            width="150" height="150" viewBox="0 0 239 239" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_dddddd_505_3861)"><path d="M108.415 119.416C116.076 119.416 119.415 116.193 119.415 108.416C119.415 116.193 122.731 119.416 130.415 119.416C122.731 119.416 119.415 122.731 119.415 130.416C119.415 122.731 116.076 119.416 108.415 119.416Z" fill="white" /></g><defs><filter id="filter0_dddddd_505_3861" x="-0.000480652" y="7.62939e-06" width="238.831" height="238.831" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="1.29066" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_505_3861" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="2.58132" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="effect1_dropShadow_505_3861" result="effect2_dropShadow_505_3861" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="9.03463" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="effect2_dropShadow_505_3861" result="effect3_dropShadow_505_3861" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="18.0693" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="effect3_dropShadow_505_3861" result="effect4_dropShadow_505_3861" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="30.9759" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="effect4_dropShadow_505_3861" result="effect5_dropShadow_505_3861" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="54.2078" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="effect5_dropShadow_505_3861" result="effect6_dropShadow_505_3861" /><feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_505_3861" result="shape" /></filter></defs>
          </motion.svg>

          <motion.svg
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.4, 0.1, 0.8, 0], scale: [0.7, 0.6, 0.8, 0.9, 0.7] }}
            transition={{ duration: 6, delay: 0.4, repeat: Infinity, times: [0, 0.2, 0.25, 0.6, 1], ease: "linear" }}

            className="absolute top-[-120%] left-[-50%] pointer-events-none"

            width="150" height="150" viewBox="0 0 239 239" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_dddddd_505_3861)"><path d="M108.415 119.416C116.076 119.416 119.415 116.193 119.415 108.416C119.415 116.193 122.731 119.416 130.415 119.416C122.731 119.416 119.415 122.731 119.415 130.416C119.415 122.731 116.076 119.416 108.415 119.416Z" fill="white" /></g><defs><filter id="filter0_dddddd_505_3861" x="-0.000480652" y="7.62939e-06" width="238.831" height="238.831" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="1.29066" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_505_3861" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="2.58132" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="effect1_dropShadow_505_3861" result="effect2_dropShadow_505_3861" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="9.03463" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="effect2_dropShadow_505_3861" result="effect3_dropShadow_505_3861" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="18.0693" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="effect3_dropShadow_505_3861" result="effect4_dropShadow_505_3861" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="30.9759" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="effect4_dropShadow_505_3861" result="effect5_dropShadow_505_3861" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="54.2078" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /><feBlend mode="normal" in2="effect5_dropShadow_505_3861" result="effect6_dropShadow_505_3861" /><feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_505_3861" result="shape" /></filter></defs>
          </motion.svg>



          <Link href="/">
            <motion.img
              src={getCurrentLogo()}
              alt="logo"
              className="w-[59px] h-[37px] transition-opacity duration-500"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </div>

        {/* Menu Toggle */}
        <motion.div
          onClick={() => setNavMenuClick(true)}
          className={`w-5 h-[13px] border-t-2 border-b-2 hover:cursor-pointer transition-colors duration-500 ${navBarTheme === "light" && !navMenuClick ? 'border-[#000000]' : 'border-[#FFFFFF]'}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={`flex mx-auto w-4 h-[6px] border-b-2 transition-colors duration-500 ${navBarTheme === "light" && !navMenuClick ? 'border-[#000000]' : 'border-[#FFFFFF]'}`} />
        </motion.div>

      </nav>

      <Search isSearch={isSearch} setIsSearch={setIsSearh} />
    </div>
  )
}
