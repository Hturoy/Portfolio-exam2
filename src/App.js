import { Navbar } from "./components/navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Projects } from "./pages/projects/Projects";
import GlobalStyle from "./globalStyles";
export const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};
