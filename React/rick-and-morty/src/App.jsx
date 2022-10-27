import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/Home";
import Search from "./routes/Search";
import { Routes, Route } from "react-router-dom";
import Characters from "./routes/Characters";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<Search />} />
        {/*<Route path="/characters/:name" element={<Search />} />*/}
      </Routes>
    </div>
  );
}

export default App;
