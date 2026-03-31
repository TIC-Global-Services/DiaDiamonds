// constants/LayoutImages.ts

export interface LayoutImageSet {
  top: string;
  left: string;
  right: string;
  bottom: string;
}

export const FALLBACK_LAYOUT: Record<string, LayoutImageSet> = {
  rings: {
    top:    "/assets/img/Layout/bgImage1.png",
    left:   "/assets/img/Layout/bgImage2.png",
    right:  "/assets/img/Layout/fallback/rings.png",
    bottom: "/assets/img/Layout/bgImage4.jpg",
  },
  bracelets: {
    top:    "/assets/img/Layout/bgImage1.png",
    left:   "/assets/img/Layout/bgImage2.png",
    right:  "/assets/img/Layout/fallback/bracelet.png",
    bottom: "/assets/img/Layout/bgImage4.jpg",
  },
  earrings: {
    top:    "/assets/img/Layout/bgImage1.png",
    left:   "/assets/img/Layout/bgImage2.png",
    right:  "/assets/img/Layout/fallback/earrings.png",
    bottom: "/assets/img/Layout/bgImage4.jpg",
  },
  necklaces: {
    top:    "/assets/img/Layout/bgImage1.png",
    left:   "/assets/img/Layout/bgImage2.png",
    right:  "/assets/img/Layout/fallback/necklace.png",
    bottom: "/assets/img/Layout/bgImage4.jpg",
  },
  pendants: {
    top:    "/assets/img/Layout/bgImage1.png",
    left:   "/assets/img/Layout/bgImage2.png",
    right:  "/assets/img/Layout/fallback/pendants.png",
    bottom: "/assets/img/Layout/bgImage4.jpg",
  },
};