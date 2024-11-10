import Herosection from "@/components/hero-section/Herosection";
import About from "./about/page";
import Services from "./services/page";
import Contact from "./contact/page";

export default function Home() {
  return (
   <div>
    <Herosection/>
    
    <About/>

    <Services/>
    <Contact/>
   </div>
  );
}
