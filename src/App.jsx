import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Tes pages
import Landing from "./views/landing";
import Home from "./views/home";
import About from "./views/about";
import Projects from "./views/projects";
import Contact from "./views/contact";
import ScrollTop from "./hooks/scrollTop";

const StandardLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "20px", minHeight: "100vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route element={<StandardLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
