import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { CategoryPage } from './Pages/CategoryPage';
import { MealDetails } from './Pages/MealDetails';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Header } from './Components/Header';

export default function () {
  return (
   <>
   <Header/>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/meal/:id" element={<MealDetails />} />
      </Routes>
   
   </>
  )
}
