import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from "./pages/about/About";
import Resume from "./pages/resume/Resume";
import Projects from "./pages/projects/Projects";
import Sidebar from './components/sidebar/Sidebar';
import Contact from "./components/contact/Contact";


function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="master-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Contact />
    </div>
  );
}

export default App;
