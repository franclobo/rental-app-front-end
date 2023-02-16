import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Sign from './components/sign';
import Signup from './components/signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
