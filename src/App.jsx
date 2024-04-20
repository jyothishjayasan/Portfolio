import Footer from "./Footer/Footer"
import Home from "./Home/Home"
import About from "./Navbar/About/About"
import Services from "./Services/Services"
import Skills from "./Skills/Skills"
import Work from "./Work/Work"

export default function App() {
  return (
  <div className="flex flex-col gap-[20px]">
   
    <Home/>
    <About />
    <Services/>
    <Skills/>
    <Work/>
    <Footer/>
  </div>
  )
}