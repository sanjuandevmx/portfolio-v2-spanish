import React from "react";
import { HeroSection } from "../components/public/HeroSection";
import { AboutMeSection } from "../components/public/AboutMeSection";
import { SkillsSection } from "../components/public/SkillsSection";
import {ProjectsSection} from './../components/public/ProjectsSection';
import {ContactSection} from './../components/public/ContactSection';
import { NavBar } from "../components/public/NavBar";
import { Footer } from "../components/public/Footer";
export const Spanish = () => {
  return (
    <>
    <NavBar/>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer/>
    </>
  );
};
