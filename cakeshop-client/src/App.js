import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Cakes from './Pages/Cakes';
import Fruits from './Pages/Fruits';
import Icecreams from './Pages/Icecreams';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>    
    <Routes>
      <Route path="/cakes" element={<Cakes/>}/>
      <Route path="/icecreams" element={<Icecreams/>}/>
      <Route path="/fruits" element={<Fruits/>}/>
    </Routes>
    </BrowserRouter>
    </div>    
  );
}

export default App;