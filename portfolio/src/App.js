import Header from "./components/Header";
import BackGroundImageDesign from "./components/BackGroundImageDesign";
import PresentationPart from "./components/PresentationPart.jsx";
import ProjectPresentationPart from "./components/ProjectPresentationPart.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div style={{ backgroundColor: "#F9FAFF", position: "relative" }}>
      <Header />
      <BackGroundImageDesign />
      <PresentationPart />
      <ProjectPresentationPart />
      <Footer />
    </div>
  );
}

export default App;
