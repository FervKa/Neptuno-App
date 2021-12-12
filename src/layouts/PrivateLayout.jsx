import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { ToastContainer } from 'react-toastify'
import { REFRESCAR_TOKEN } from '../components/graphql/auth/mutations';
import { Navbar } from '../components/Navbar';
import { useAuth } from '../context/authContext';

const PrivateLayout = () => {

    const navigate = useNavigate();

    const { authToken, setToken } = useAuth();

    const [loadingAuth, setLoadingAuth]= useState(true)
    const [refrescarToken, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(REFRESCAR_TOKEN)

    useEffect(() => {
        refrescarToken()
    }, [])

    useEffect(() => {
        console.log('data refrescarToken ', mutationData);
        if (mutationData) {
            if (mutationData.refrescarToken.token) {
                setToken(mutationData.refrescarToken.token)
            }else{
                setToken(null)
                navigate('/auth/login')
            }
            setLoadingAuth(false)
        }
    }, [mutationData, loadingAuth])

    useEffect(() => {
        console.log("token de contexto Actual ", authToken);
        console.log("token de localStorage Actual ", localStorage.getItem('token'));
    },[authToken])

    if(mutationLoading || loadingAuth){return <div>Cargando...</div>}


    return (
        <div>
            <Navbar/>
            <Outlet />
            
            <ToastContainer />
        </div>
    )
}

export default PrivateLayout
