import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Characters from "./routes/Characters";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Navigation />} />
        <Route index element={<Home />} />
        <Route exact path="/characters" element={<Characters />} />
      </Routes>
    </div>
  );
}

export default App;
