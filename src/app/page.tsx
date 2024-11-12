"use client";

import Card from "@/components/Cards";
import Main from "@/components/main";
import ImageSwiper from "@/components/Imageslider";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <Hero />
      </section>

      <section className="main-section">
        <Main />
        <div className="image-swiper-container">
          <ImageSwiper />
        </div>
      </section>

      <section className="core-courses-section">
        <div className="section-title">
          Core Courses Sequence
        </div>
        <div className="core-courses-cards">
          <Card
            img="/images/prog fund.jpg"
            heading="Programming Fundamentals"
          />
          <Card img="/images/web3.jpg" heading="Web2 Using NextJS" />
          <Card img="/images/Earn.jpg" heading="Earn as You Learn" />
        </div>
      </section>

      <section className="advanced-courses-section">
        <div className="section-title">
          Advanced Courses
        </div>

        <div className="advanced-courses-cards">
          <Card img="/images/Ai.jpg" heading="Artificial Intelligence" />
          <Card img="/images/world.jpg" heading="Web3 and Metaverse" />
          <Card img="/images/cloud.jpg" heading="Cloud-Native Computing" />
          <Card img="/images/iot.jpg" heading="Ambient Computing and IoT" />
          <Card
            img="/images/genomics.jpg"
            heading="Genomics and Bioinformatics"
          />
          <Card
            img="/images/network.jpg"
            heading="Network Programmability and Automation"
          />
        </div>
      </section>
    </>
  );
}
