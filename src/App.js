import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FAQ from "./pages/FAQ/FAQ";
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Legal from "./pages/legal/Legal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Career from "./pages/career/Career";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";
import CodeRhythm from "./pages/codeRhythm/CodeRhythm";
import Services from "./pages/services/Services";
import Portfolio from "./pages/portfolio/Portfolio";
import Partnerships from "./pages/partnerships/Partnerships";
import Testimonials from "./pages/testimonials/Testimonials";
import Collaboration from "./pages/collaboration/Collaboration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/code-rhythm" element={<CodeRhythm />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/collaboration" element={<Collaboration />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
