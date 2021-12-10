import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Consult from './Consult'
import { Login } from './Login'
import { User } from './User'


export const Routers = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Login />} />
                    <Route path="/perfil" element={<User />} />
                    <Route path="/usuarios" element={<Consult />} />
                    {/* <MenuLateral />
                    <User />
                    <Registro />
                    <Consult /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}
