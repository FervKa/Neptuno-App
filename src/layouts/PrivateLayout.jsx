import { useMutation } from '@apollo/client';
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { ToastContainer } from 'react-toastify'
import { REFRESCAR_TOKEN } from '../components/graphql/auth/mutations';
import { useAuth } from '../context/authContext';

const PrivateLayout = () => {

    const navigate = useNavigate();

    const { authToken, setToken } = useAuth();

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
            }
        }
    }, [mutationData])

    useEffect(() => {
        console.log("token de contexto Actual ", authToken);
        console.log("token de localStorage Actual ", localStorage.getItem('token'));
    },[authToken])

    if(mutationLoading){return <div>Cargando...</div>}

    if(!authToken){
        navigate('/auth/login')
    }

    return (
        <div>
            <Outlet />
            <ToastContainer />
        </div>
    )
}

export default PrivateLayout
