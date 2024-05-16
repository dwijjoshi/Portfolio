import Head from "next/head";

import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroNew from "@/components/HeroNew";
import About from "@/components/About";
import Skills from "@/components/Skills";

import ProjectsNew from "@/components/ProjectsNew";
import ContactMe from "@/components/ContactMe";
import ProjectsFinal from "@/components/ProjectsFinal";
import ProjectsFinal2 from "@/components/ProjectsFinal2";
import ProjectsFinal3 from "@/components/ProjectsFinal3";
import Experience from "@/components/Experience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#0a192f] h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[rgba(88,224,195,255)] scrollbar-thin">
      <Head>
        <title>Dwij Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-start">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <ProjectsFinal />
      </section>

      <section id="projects" className="snap-start">
        <ProjectsFinal2 />
      </section>

      <section id="projects" className="snap-start">
        <ProjectsFinal3 />
      </section>
      {/* Contact me */}

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}
