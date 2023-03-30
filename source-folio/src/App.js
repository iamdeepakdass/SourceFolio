import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router';
import Portfolio from './Components/Portfolio';
import Previewbutton from './Components/Previewbutton';
function App() {
  return (
     <div>
      <Routes>
        <Route path='/' element={<Previewbutton/>}/>
        <Route path='portfolio' element={<Portfolio/>}/>
      </Routes>
    </div>
  );
}

export default App;
