import About from "@/component/About";
import Footer from "@/component/Footer";
import Navbar from "@/component/navbar";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Navbar />
    <HeroSection />
    <About />
    <Domestic />
    <International />
    <PopularDestination />
    <Services />
    <Resort />
    <Footer />
    
    </div>
  );
}
