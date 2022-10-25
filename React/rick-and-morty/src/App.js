import "./App.css";
import { Routes, Route } from "react-router-dom";
import Characters from "./routes/characters/Characters";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </div>
  );
}

export default App;
