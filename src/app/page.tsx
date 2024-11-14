import Herosection from "@/components/hero-section/Herosection";
import About from "./about/page";
import Services from "./services/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import Testimonials from "./testimonials/page";

export default function Home() {
  return (
   <div>
    <Herosection/>
    
    <About/>

    <Projects/>

    <Services/>
    <Testimonials/>
    <Contact/>
   </div>
  );
}
