import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Journey from "./pages/Journey";
import TechStack from "./pages/TechStack";
import OpenSource from "./pages/OpenSource";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import AutoBreadcrumbLayout from "./components/layout/AutoBreadcrumbLayout";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Hero route - no breadcrumb */}
        <Route path="/" element={<Hero />} />

        {/* Routes with breadcrumb */}
        <Route element={<AutoBreadcrumbLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/open-source" element={<OpenSource />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
