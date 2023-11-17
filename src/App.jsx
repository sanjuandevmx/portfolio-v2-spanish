import { NavBar } from "./components/public/NavBar";
import { Footer } from "./components/public/Footer";
import { English } from "./pages/English";
import { Route, Routes } from "react-router-dom";
import { HeroSection } from './components/public/HeroSection';
import { AboutMeSection } from "./components/public/AboutMeSection";
import { SkillsSection } from "./components/public/SkillsSection";
import { ProjectsSection } from "./components/public/ProjectsSection";
import { ContactSection } from "./components/public/ContactSection";
import { Spanish } from "./pages/Spanish";
function App() {
  return (
    <>
      
 
      <Routes >
        <Route path="/" element={<Spanish/>} />
      <Route path="/english" element={<English />} />
 
      
      </Routes >
    
    </>
  );
}

export default App;
