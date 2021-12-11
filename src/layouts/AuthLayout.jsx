
import React from 'react'
import {Outlet} from 'react-router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const AuthLayout = () => {
    return (
        <div>
            Layout Publico
            <Outlet/>
            <ToastContainer/>
        </div>
    )
}
