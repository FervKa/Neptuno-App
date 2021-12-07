import React from 'react'

export const Registro = () => {
    return (
        <>

            <div className="container" style={{maxWidth: "700px"}}>

                <div className="contenedor-login">

                    <div className="profile-content ">
                        <div className="container pb-3">
                            <div className="row">
                                <div className="profile-name mt-3 text-center border-bottom border-3 border-warning pb-3  npcolorbold">
                                    Registrar Usuario
                                </div>
                            </div>
                        </div>

                        <div className="container pt-1">
                            <div className="row">
                                <div className="col border-3 border-warning">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="nombre" className="form-label  npcolor">Nombre:*</label>
                                            <input  type="text" className="form-control isI" id="nombre" aria-describedby="nameHelp" />
                                            {/* <div id="emailHelp" className="form-text">Todos los campos con (*) son obligatorios</div> */}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="apellido" className="form-label  npcolor">Apellido</label>
                                            <input  type="lastname" className="form-control isI" id="apellido" aria-describedby="nameHelp" required />
                                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="ident" className="form-label npcolor">Identificación</label>
                                            <input  type="number" className="form-control isI" id="ident" aria-describedby="nameHelp" required />
                                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="rol" className="form-label  npcolor">Rol</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option defaultValue>Seleccione</option>
                                                <option value="1">Estudiante</option>
                                                <option value="2">Lider</option>
                                                <option value="3">Administrador</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="Email" className="form-label  npcolor">Email</label>
                                            <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="Password" className="form-label  npcolor">Password</label>
                                            <input type="password" className="form-control" id="Password" aria-describedby="passlHelp" />
                                        </div>

                                    </form>
                                </div>
                                
                            </div>
                        </div>



                        <div className="container pb-3">
                            <div className="row text-center">
                                <div className="col">                                  
                                    <button className="btn btn-warning  isI" type="button">Registrar Usuario</button>                                   
                                </div>
                                <div className="col">                                    
                                    <button className="btn btn-dark  isI" type="button">Cancelar</button>                                 
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
