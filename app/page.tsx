"use client"

import Hero from "@/components/Home/Hero"
import BrandValue from "@/components/Home/BrandValue"
import Arrivals from "@/components/Home/Arrivals"
import DiamondSpotlight from "@/components/Home/DiamondSpotlight"
import TheArtOfRefinement from "@/components/Home/TheArtOfRefinement"
import Craftsmanship from "@/components/Home/Craftmanship"
import DIAExperience from "@/components/Home/DIAExperience"
import Testimonials from "@/components/Home/Testimonials"
import OurCollection from "@/components/Home/OurCollections"
import QandA from "@/components/Home/Q&A"
import Shop from "@/components/Home/Shop"
import ChatBtn from "@/components/Reusable/ChatBtn"

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <ChatBtn />

      {/* HERO */}
      <section data-theme='dark'>
        <div
          className="fixed top-0 left-0 w-full z-[1]"
          style={{
            height: '100vh', // @ts-ignore
            height: '100dvh'
          }}
        >
          <Hero />
        </div>
      </section>

      {/* SENTINEL */}
      <div style={{ height: "100vh" }} />

      {/* ALL SECTIONS */}
      <div className="relative z-[20]">

        <section data-theme="light">
          <OurCollection />
        </section>

        <section data-theme="dark">
          <DiamondSpotlight />
        </section>

        <section data-theme="light">
          <Shop />
        </section>

        <section data-theme="dark">
          <TheArtOfRefinement />
        </section>

        <section data-theme="light">
          <Craftsmanship />
        </section>

        <section data-theme="light">
          <BrandValue />
        </section>

        <section data-theme="light">
          <Arrivals />
        </section>


        <section data-theme="dark">
          <DIAExperience />
        </section>


        <section data-theme="light">
          <Testimonials />
        </section>

        <section data-theme="light">
          <QandA />
        </section>

      </div>
    </div>
  )
}