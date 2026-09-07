import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import FrontEndMastery from "./views/front-end-mastery";
import BackEndMastery from "./views/back-end-mastery";
import FullstackImmersion from "./views/fullstack-immersion";
import DevOpsImmersion from "./views/devops-immersion";
import MentorshipApplication from "./views/mentorship-application";
import Landing from "./views/landing";
import Home from "./views/home";
import About from "./views/about";
import Projects from "./views/projects";
import LwsPartnership from "./views/lws-partnership";
import FormationHub from "./views/formation-hub";
import Contact from "./views/contact";
import ScrollTop from "./hooks/scrollTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Assessment from "./views/assessment";

const StandardLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "0" }}>
        <Outlet />
        <ToastContainer position="top-right" autoClose={5000} theme="dark" />
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
          <Route path="/formation-hub" element={<FormationHub />} />
          <Route
            path="/order/front-end-mastery"
            element={<FrontEndMastery />}
          />
          <Route path="/order/back-end-mastery" element={<BackEndMastery />} />
          <Route
            path="/order/fullstack-immersion"
            element={<FullstackImmersion />}
          />
          <Route path="/order/devops-immersion" element={<DevOpsImmersion />} />
          <Route
            path="/mentorship-application"
            element={<MentorshipApplication />}
          />
          <Route path="/lws-partnership" element={<LwsPartnership />} />
          <Route path="/assessment" element={<Assessment />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
