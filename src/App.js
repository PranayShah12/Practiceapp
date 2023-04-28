import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import BtnColor from './Btncolor';
import Number from './Number'
import Fakeapi from './Fakeapi'
import Navbar from './Navbar';
import Cocktails from './Cocktails';
import Cocktaildetails from './Cocktaildetails';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Login from './Login';

export const WrapperContext = createContext();

export default function App() {
    const [searchFormValue, setSearchFormValue] = useState("")
    const [isLogin, setIsLogin] = useState(false)

    return (
        <>
            <WrapperContext.Provider value={{
                searchFormValue, setSearchFormValue, isLogin, setIsLogin

            }}>
                <Navbar />
                <Routes>
                    <Route path="/Home" element={<Home />}></Route>
                    <Route path="/Cocktails" element={<PrivateRoute><Cocktails /></PrivateRoute>}></Route>
                    <Route path="/Cocktails/:id" element={<Cocktaildetails />}></Route>
                    <Route path="/Login" element={<Login />}></Route>
                    <Route path="*" element={<h2>Page not Found</h2>}></Route>
                </Routes>
            </WrapperContext.Provider>
        </>
    )
}