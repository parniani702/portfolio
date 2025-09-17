import About from "@/components/About";
import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Intro />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
