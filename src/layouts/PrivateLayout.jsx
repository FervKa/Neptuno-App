import React from 'react'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'

const PrivateLayout = () => {


    return (
        <div>
            <Outlet/>
            <ToastContainer/>
        </div>
    )
}

export default PrivateLayout
