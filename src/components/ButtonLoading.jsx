import React from 'react'
import ReactLoading from 'react-loading';
import { Loader } from './Loader';


const ButtonLoading = ({ disabled, loading, text }) => {
    return (
        <button
            disabled={disabled}
            text='submit'
            className='d-grid gap-2 col-6 mx-auto pb-3 botun'

        >
            {loading ? <Loader /> : text}
        </button>
    )
}

export default ButtonLoading;
