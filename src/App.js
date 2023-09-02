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
          <Route index path="/" element={<FAQ />} />
          <Route index path="/" element={<Blog />} />
          <Route index path="/" element={<Home />} />
          <Route index path="/" element={<About />} />
          <Route index path="/" element={<Legal />} />
          <Route index path="/" element={<Career />} />
          <Route index path="/" element={<Contact />} />
          <Route index path="/" element={<Products />} />
          <Route index path="/" element={<Services />} />
          <Route index path="/" element={<Portfolio />} />
          <Route index path="/" element={<Partnerships />} />
          <Route index path="/" element={<Testimonials />} />
          <Route index path="/" element={<Collaboration />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
