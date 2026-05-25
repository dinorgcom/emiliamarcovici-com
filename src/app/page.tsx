import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PopGrid from "@/components/PopGrid";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Studio from "@/components/Studio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <PopGrid />
      <About />
      <Gallery />
      <Studio />
      <Contact />
      <Footer />
    </main>
  );
}
