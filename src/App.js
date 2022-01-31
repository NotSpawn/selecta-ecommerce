import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BackgroundSlider from "react-background-slider";
import image1 from "./assets/images/slide-2.jpg";
import image2 from "./assets/images/slide-1.jpg";
import ItemlistContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <header>
        <BackgroundSlider
          images={[image1, image2]}
          duration={5}
          transition={2}
        />
        <ItemlistContainer />
      </header>
      <main></main>
    </div>
  );
}

export default App;
