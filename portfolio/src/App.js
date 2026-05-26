import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BackGroundImageDesign from "./components/BackGroundImageDesign";
import PresentationPart from "./components/PresentationPart.jsx";
import ProjectPresentationPart from "./components/ProjectPresentationPart.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#F9FAFF" }}>
        <div className="relative max-w-[1600px] mx-auto overflow-hidden">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <BackGroundImageDesign />
                  <PresentationPart />
                  <ProjectPresentationPart />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
