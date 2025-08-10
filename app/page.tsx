import AboutSection from "./components/AboutSection";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Products from "./components/Products";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Gallery />
      <Products />
    </main>
  );
}
