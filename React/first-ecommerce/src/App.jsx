import { useThemeMode } from 'flowbite-react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';

function App() {
  const [mode, setMode, toggleMode] = useThemeMode(true)
  
  useEffect(() => {
    setMode("Dark")
  })

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>{/*element={<Home />}*/} 
        <Route path="/contact" />{/*element={<Contact />}*/} 
        <Route path="/catalog" />{/*element={<Catalog />}*/} 
      </Routes>
    </div>
  )
}

export default App
