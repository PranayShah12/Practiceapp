import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router-dom';
import BtnColor from './Btncolor';
import Number from './Number'
import Fakeapi from './Fakeapi'
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import Cocktails from './Cocktails';
import Cocktaildetails from './Cocktaildetails';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Cocktails" element={<Cocktails />}></Route>
        <Route path="/Cocktails/:id" element={<Cocktaildetails />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);
