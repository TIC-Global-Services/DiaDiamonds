"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductList from '@/components/collectionsNew/productList';
import ProductView from '@/components/collectionsNew/productview';
import TheArtOfCrafting from './TheArtOfCrafting';

interface ViewState {
  mode: 'list' | 'detail';
  productId?: number;
  category: string;
}

const TheArtOfCraftingContent: Record<string, { bgImage: string; text: string }> = {
  "rings": {
    bgImage: '/assets/img/Collections/TheArtOfCrafting/bgImage1.png',
    text: 'Where Every Sparkle Tells a Story, Moments Shine Brighter Together',
  },
  "earrings": {
    bgImage: '/assets/img/Collections/TheArtOfCrafting/bgImage1.png',
    text: 'Stories That Dangle, Sparkles That Stay',
  },
  "bracelets": {
    bgImage: '/assets/img/Collections/TheArtOfCrafting/bgImage1.png',
    text: 'Where Every Sparkle Whispers a Story, Elegance Shines with Every Turn',
  },
  "necklaces": {
    bgImage: '/assets/img/Collections/TheArtOfCrafting/bgImage1.png',
    text: 'Where Every Glimmer Speaks, and Every Moment Shines Brighter',
  },
  "pendants": {
    bgImage: '/assets/img/Collections/TheArtOfCrafting/bgImage1.png',
    text: 'Where Every Drop of Light Tells Your Story',
  },
};

export default function CollectionsClient() {
  const searchParams = useSearchParams();
  const [viewState, setViewState] = useState<ViewState>({
    mode: 'list',
    category: searchParams.get('category') || 'rings'
  });

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setViewState(prev => ({ ...prev, category: cat, mode: 'list' }));
    }
  }, [searchParams]);


  const handleProductClick = (id: number) => {
    setViewState(prev => ({ ...prev, mode: 'detail', productId: id }));
  };

  const handleBack = () => {
    setViewState(prev => ({ ...prev, mode: 'list', productId: undefined }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}

      {/* Category Navigation - styled like CollectionsTop */}
      {viewState.mode === 'list' && (
        <section data-theme="dark" className="w-full mt-[25.49%] mb-[6.82%] md:mb-10 md:mt-[6.53%]">
          {/* Title Menu */}
          <div className="w-full py-[3.64%] md:py-[2.5%] flex justify-center items-center gap-[3.1%] md:gap-[0.56%] border-y border-[#000000]/10">
            <a href="#" onClick={(e) => e.preventDefault()} className="text-[10px] md:text-[12px] leading-[16px] tracking-[-0.26px] uppercase text-[#000000]">HOME</a>
            <span className="text-[10px] md:text-[12px] leading-[16px] tracking-[-0.26px] uppercase text-[#6C757D]">/</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-[10px] md:text-[12px] leading-[16px] tracking-[-0.26px] uppercase text-[#000000]">COLLECTIONS</a>
            <span className="text-[10px] md:text-[12px] leading-[16px] tracking-[-0.26px] uppercase text-[#6C757D]">/</span>
            <span className="text-[10px] md:text-[12px] leading-[16px] tracking-[-0.26px] uppercase text-[#000000]">{viewState.category}</span>
          </div>

          {/* Picture Menu */}
          <div className="w-full flex gap-[3.88%] md:gap-[2.6%] px-[3.88%] md:px-[3.19%] overflow-scroll md:overflow-hidden md:mt-[1.33%]" style={{ scrollbarWidth: 'none' }}>
            {[
              { title: 'rings', img: '/assets/img/Collections/CollectionsTop/collectionMenuItem1.jpg' },
              { title: 'earrings', img: '/assets/img/Collections/CollectionsTop/collectionMenuItem2.png' },
              { title: 'bracelets', img: '/assets/img/Collections/CollectionsTop/collectionMenuItem3.png' },
              { title: 'necklaces', img: '/assets/img/Collections/CollectionsTop/collectionMenuItem4.png' },
              { title: 'pendants', img: '/assets/img/Collections/CollectionsTop/collectionMenuItem5.png' }
            ].map((data, id) => (
              <div
                onClick={() => setViewState(prev => ({ ...prev, category: data.title }))}
                key={id}
                className="flex flex-col justify-center items-center w-[28.88%] md:w-[17.7%] shrink-0 cursor-pointer"
              >
                <img src={data.img} alt={data.title} className={`${viewState.category === data.title ? 'border-[0.5px] border-[#431A1A]/30' : ''} w-full aspect-119/150 md:aspect-240/224 overflow-hidden`} />
                <p className={`${viewState.category === data.title ? 'text-[#431A1A] underline' : 'text-[#000000]'} font-semibold mt-[3.79%] md:mt-[14.17%] text-[11px] md:text-[13px] leading-[16px] tracking-[1.2px] uppercase`}>
                  {data.title}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <main className={`py-12 relative ${viewState.mode === 'list' ? '' : 'mt-[80px]'}`}>
        {viewState.mode === 'list' ? (
          <ProductList
            category={viewState.category}
            onProductClick={handleProductClick}
          />
        ) : (
          <ProductView
            productId={viewState.productId!}
            onBack={handleBack}
          />
        )}
      </main>

     <section className="w-full relative mt-10">
       {viewState.mode === 'list' && TheArtOfCraftingContent[viewState.category.toLowerCase()] && (
        <TheArtOfCrafting
          img={TheArtOfCraftingContent[viewState.category.toLowerCase()].bgImage}
          text={TheArtOfCraftingContent[viewState.category.toLowerCase()].text}
        />
      )}
     </section>
    </div>
  );
}
