import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import BtnColor from './Btncolor';
import Number from './Number'
import Fakeapi from './Fakeapi'
import Navbar from './Navbar';
import Cocktails from './Cocktails';
import Cocktaildetails from './Cocktaildetails';
import Home from './Home';

export const wrapperContext = createContext();

export default function App() {
    const [searchFormValue, setSearchFormValue] = useState("")

    return (
        <>
            <wrapperContext.Provider value={{ searchFormValue, setSearchFormValue }}>
                <Navbar />
                <Routes>
                    <Route path="/Home" element={<Home />}></Route>
                    <Route path="/Cocktails" element={<Cocktails />}></Route>
                    <Route path="/Cocktails/:id" element={<Cocktaildetails />}></Route>
                </Routes>
            </wrapperContext.Provider>
        </>
    )
}