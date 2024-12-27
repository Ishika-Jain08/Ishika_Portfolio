import { useEffect, useRef } from "react"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import About from "./About"
import Project from "./Project"
import Skills from "./Skills"
import LocomotiveScroll from "locomotive-scroll";
import Experience from "./Experience"

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(()=>{
    const scroll = new LocomotiveScroll({
      el:scrollRef.current,
      smooth:true,
    });
    return()=>{
      scroll.destroy();
    }
  },[])
  return (
  <>
  <div id="main" ref={scrollRef} className="scroll-container">
  <Hero/>
<About/>
<Skills/>
<Experience/>
<Project/>
<Footer/>
  </div>

  </>
  )
}

export default Home