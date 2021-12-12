import { User } from './components/User.jsx';
import '../src/css/index.css';
import { Login } from './components/Login';
import { Registro } from "./components/Registro.jsx";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User_admin from "./components/Users_admin.jsx";
import { AuthLayout } from '../src/layouts/AuthLayout'
import { AuthContext } from "./context/authContext.js";
import { UserContext } from "./context/userContext";
import { useState, useEffect } from "react";
import PrivateLayout from "./layouts/PrivateLayout.jsx";
import { setContext } from '@apollo/client/link/context';
import jwt_decode from 'jwt-decode'


const httpLink = createHttpLink({
  uri: "https://neptuno-app.herokuapp.com/graphql"
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem('token'));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState("")

  const setToken = (token) => {
    if (token) {
      setAuthToken(token)
      localStorage.setItem('token', JSON.stringify(token))
    }else{
      setAuthToken(null)
      localStorage.removeItem('token')
    }
  }

  useEffect(() => {
    
    if(authToken){
      const decodedToken = jwt_decode(authToken)
      // console.log('token decoded: ',decodedToken);
      setUserData({
        _id: decodedToken._id,
        nombres: decodedToken.nombres,
        apellidos: decodedToken.apellidos,
        identificacion: decodedToken.identificacion,
        correo: decodedToken.correo,
        rol: decodedToken.rol,
        estado: decodedToken.estado
      });
      // console.log('Datos de usuario',userData);
    }
  },[authToken])


  return (
    <>
      <ApolloProvider client={client}>
        <AuthContext.Provider value={{ authToken, setAuthToken, setToken }}>
          <UserContext.Provider value={{ userData, setUserData }}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<PrivateLayout />}>
                  <Route path="" element={<User />} />
                  <Route path="/perfil" element={<User />} />
                  <Route path="/usuarios" element={<User_admin />} />
                  
                  {/* <Consult /> */}
                </Route>
                <Route path='/auth' element={<AuthLayout />}>
                  <Route path="registro" element={<Registro />} />
                  <Route path='login' element={<Login />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </UserContext.Provider>
        </AuthContext.Provider>
      </ApolloProvider>
    </>
  );
}

export default App;
