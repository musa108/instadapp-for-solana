import React from "react";
import hero_image from "/src/assets/defi.jpg";

const HeroSection = () => {
  return (
    <main>
      <section className="flex font-lora items-center  gap-40 my-8 max-md:my-3 max-md:gap-8">
        <h1 className="lg:text-2xl text-sm lg:max-w-[400px] text-blue-200 lg:ml-16 ml-2">
          Are you ready to explore the exciting world of Decentralized Finance
          (DeFi)? SolFinance is your all-in-one platform that bridges the gap
          between multiple DeFi protocols and empowers you with seamless
          swapping capabilities.
        </h1>
        <img className="w-[400px] h-[250px] max-md:w-[150px] max-md:h-[120px]" src={hero_image} alt="hero-image" />
      </section>
    </main>
  );
};

export default HeroSection;
