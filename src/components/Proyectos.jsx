import { Navbar } from './Navbar';
import { MenuLateral } from './MenuLateral';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Loading } from './Loading.jsx';
import { useQuery } from '@apollo/client';
import { GET_PROYECTOS } from './graphql/proyectos/querys';

const Proyectos = () => {

    const { data, loading, error } = useQuery(GET_PROYECTOS);
    const [listaProyectos, setListaProyectos] = useState([])
    const [loader, setLoader] = useState(false)
  
    const cargarProyectos = async () => {

        setLoader(true)
        //const respuesta = await fetch(pathUrl)
        //const { data, loading, error } = useQuery(GET_PROYECTOS);
        console.log(data);
        //const datafull = await data.json()
        //console.log(datafull);
        //setListaProyectos(datafull.results)
        setLoader(false)
    }
  
    useEffect(() => {
      cargarProyectos()
    }, [data])


    return (
        <>
            <Navbar titulo='Proyectos' />
            <h1>Prueba Proyectos</h1>
            <MenuLateral />


            {
        loader ?
          <Loading />
          :
          <div>
            <h1>Lista Personajes</h1>
            {/* <hr />


            <div className="row row-cols-1 row-cols-md-3 g-4">

              {

                listaPersonajes.map((personaje) => (
                  <div className="col" key={personaje.id}>
                    <div className="card">
                      <img src={personaje.img} className="card-img-top" alt={personaje.name} />
                      <div className="card-body">
                        <h5 className="card-title">
                          {personaje.name} <small>({personaje.alias})</small>
                        </h5>
                        <p className="card-text">
                          {personaje.description}
                        </p>
                        <Link
                          to={`/personajes/${personaje.id}`}
                          className="btn btn-primary">Ver mas...</Link>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">{personaje.powers}</small>
                      </div>
                    </div>
                  </div>
                ))

              }

            </div> */}



          </div>}

        </>
    )
}

export default Proyectos
