import Image from "next/image";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import { AnimatedTestimonialsDemo } from "./components/Testimonial";
import { HeroScrollDemo } from "./components/LastContainer";
import { GlobeDemo } from "./components/GlobeComp";
import { TabsDemo } from "./components/ProductTab";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <HeroScrollDemo />
      <Feature />
      <AnimatedTestimonialsDemo />
      <GlobeDemo />
      <TabsDemo />
      <Footer />
    </div>
  );
}
