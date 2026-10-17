import portfolioData from "./data/portfolioData";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const {
    personal,
    highlights,
    education,
    skills,
    projects,
    certifications,
    navLinks,
  } = portfolioData;

  return (
    <>
      <Header
        name={personal.name}
        shortName={personal.shortName}
        navLinks={navLinks}
      />
      <main>
        <Hero personal={personal} />
        <About objective={personal.objective1 || personal.objective} highlights={highlights} />
        <Education education={education} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Certifications certifications={certifications} />
        <Resume />
        <Contact personal={personal} />
      </main>
      <Footer personal={personal} />
    </>
  );
}

export default App;
