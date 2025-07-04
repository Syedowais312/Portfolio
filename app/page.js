import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const rect = bar.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    bar.style.transform = 'scaleX(1)';
                    bar.style.transformOrigin = 'left';
                    bar.style.transition = 'transform 1.5s ease-in-out';
                }
            });
        }
  return (
    <>
     
    
      <div className="loading-bar"></div>
      <Navbar/>
    <Hero/>
     <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    
    <Footer/>
   
    </>
   
   
    
  );
}
