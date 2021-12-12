import { User } from './components/User.jsx';
import '../src/css/index.css';
import { Login } from './components/Login';
import { Registro } from "./components/Registro.jsx";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User_admin from "./components/Users_admin.jsx";
import { AuthLayout } from '../src/layouts/AuthLayout'
import { AuthContext } from "./context/authContext.js";
import { useState } from "react";
import Editar_usuario from "./components/Editar_usuario.jsx";
import Proyectos from './components/Proyectos';
import { Proyecto } from './components/Proyecto.jsx';


/* const httpLink = createHttpLink({
  uri: "https://neptuno-app.herokuapp.com/graphql"
}) */

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://neptuno-app.herokuapp.com/graphql",
  }),
  cache: new InMemoryCache(),
})

function App() {

  const [authToken, setAuthToken] = useState("")

  const setToken = (token) => {
    setAuthToken(token)
    if (token) {
      localStorage.setItem('token', JSON.stringify(token))
    }
  }

  return (
    <>
      <ApolloProvider client={client}>
        <AuthContext.Provider value={{ setToken }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<User />} />
              <Route path="/perfil" element={<User />} />
              <Route path="/usuarios" element={<User_admin />} />
              <Route path="/usuarios/editar/:_id" element={<Editar_usuario />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/proyectos/:_id" element={<Proyecto />} />
              {/* <MenuLateral /> */}
              {/* <User /> */}
              {/* <Registro /> */}
              {/* <Consult /> */}
              <Route path='/auth' element={<AuthLayout />}>
                <Route path="registro" element={<Registro />} />
                <Route path='login' element={<Login />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthContext.Provider>
      </ApolloProvider>
    </>
  );
}

export default App;
