import { useMutation } from '@apollo/client'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'
import { REFRESCAR_TOKEN } from '../components/graphql/auth/mutations'
import { useAuth } from '../context/authContext'

const PrivateLayout = () => {
    const {authToken, setAuthToken, setToken } = useAuth()

    const [refrescarToken,{data: mutationData, loading: mutationLoading, error: mutationError}] = useMutation(REFRESCAR_TOKEN)

    useEffect(() => {
        refrescarToken()
    },[])

    useEffect(() => {
        console.log('refrescarToken',mutationData.refrescarToken.token);
        if(mutationData.refrescarToken.token){
            setToken(mutationData.refrescarToken.token)
        }
    },[mutationData])

    useEffect(() => {
        console.log('token Actual', authToken);
    },[authToken])

    return (
        <div>
            <Outlet/>
            <ToastContainer/>
        </div>
    )
}

export default PrivateLayout
