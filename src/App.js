import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BackgroundSlider from "react-background-slider";
import image1 from "./assets/images/slide-2.jpg";
import image2 from "./assets/images/slide-1.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <BackgroundSlider images={[image1, image2]} duration={5} transition={2} />
    </div>
  );
}

export default App;
