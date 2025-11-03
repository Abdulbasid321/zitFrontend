import About from "@/components/About";
import Admissions from "@/components/Admissions";
import Contact from "@/components/Contact";
import Departments from "@/components/Departments";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
   <div>
    <Nav />
    <Hero />
    <About />
      <Departments />
      <Admissions />
      <Gallery />
      <Events />
      <Contact />
      <Footer />
   </div>
  );
}
