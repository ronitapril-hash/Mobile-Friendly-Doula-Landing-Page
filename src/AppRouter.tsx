import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HelmetProvider } from 'react-helmet-async';
import BirthDoulaServices from './pages/BirthDoulaServices';
import PostpartumServices from './pages/PostpartumServices';
import SpinningBabies from './pages/SpinningBabies';
import PrenatalMassage from './pages/PrenatalMassage';
export function AppRouter() {
  return <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/birth-doula" element={<BirthDoulaServices />} />
          <Route path="/postpartum" element={<PostpartumServices />} />
          <Route path="/spinning-babies" element={<SpinningBabies />} />
          <Route path="/prenatal-massage" element={<PrenatalMassage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>;
}