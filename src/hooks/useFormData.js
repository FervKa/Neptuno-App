import {useRef, useState} from 'react'

const useFormData = (initial) =>{
    const form = useRef(initial)
    const [formData,setFormData] = useState({})
    const getFormData = () =>{
        const infoFormulario = new FormData(form.current)
        const objetoNuevo = {}
        infoFormulario.forEach((value,key)=>{
            objetoNuevo[key] = value
        })
        console.log(objetoNuevo);
        return objetoNuevo
    }
    const updateFormData = () =>{
        setFormData(getFormData())
    }
    return {form, formData, updateFormData}
}

export default useFormData;