import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { GlobalContext } from "./components/context/ShoppingContext";
import Catalog from "./routes/Catalog";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import ShoppingCart from "./routes/ShoppingCart";

function App() {
  return (
    <div className="App">
      <GlobalContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </GlobalContext>
    </div>
  );
}

export default App;
