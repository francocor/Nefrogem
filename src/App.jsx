import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Turnos from './pages/Turnos';
import EquipoNefrogen from './pages/EquipoNefrogen';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/turnos" element={<Turnos />} />
        <Route path="/equipo-nefrogen" element={<EquipoNefrogen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;