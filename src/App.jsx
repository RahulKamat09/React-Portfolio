import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 120,
    });

    // Refresh on every render
    AOS.refresh();
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<><Header /><Home /> <Footer /></>} />
          <Route path="/about" element={<><Header /><About /> <Footer /></>} />
          <Route path="/resume" element={<><Header /><Resume /> <Footer /></>} />
          <Route path="/portfolio" element={<><Header /><Portfolio /> <Footer /></>} />
          <Route path="/contact" element={<><Header /><Contact /> <Footer /></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
