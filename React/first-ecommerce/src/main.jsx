import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Flowbite } from 'flowbite-react';

//https://flowbite-react.com/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Flowbite>
      <App />
    </Flowbite>
    </BrowserRouter>
  </React.StrictMode>
)
