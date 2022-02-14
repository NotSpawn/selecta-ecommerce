import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BackgroundSlider from "react-background-slider";
import image1 from "./assets/images/slide-2.jpg";
import image2 from "./assets/images/slide-1.jpg";
import ItemlistContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <header>
        <Home />
        <BackgroundSlider
          images={[image1, image2]}
          duration={5}
          transition={2}
        />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ItemlistContainer space={600} />} />
          <Route
            path="/products/:productId"
            element={<ItemDetailContainer />}
          />
          <Route
            path="/category/:categoryName"
            element={<ItemlistContainer />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
