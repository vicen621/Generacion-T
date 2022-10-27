import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import Characters from "./routes/Characters";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/characters" element={<Characters />} />
      </Routes>
    </div>
  );
}

export default App;
