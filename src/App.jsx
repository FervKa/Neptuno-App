import { MenuLateral } from "./components/MenuLateral.jsx"
import { User } from './components/User.jsx';
import '../src/css/index.css';
import { Login } from './components/Login';
import { Registro } from "./components/Registro.jsx";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User_admin from "./components/Users_admin.jsx";
import { AuthLayout } from '../src/layouts/AuthLayout'
import { AuthContext } from "./context/authContext.js";
import { UserContext } from './context/userContext'
import { useState } from "react";
import Editar_usuario from "./components/Editar_usuario.jsx";
import Proyectos from './components/Proyectos';
import PrivateLayout from "./layouts/PrivateLayout.jsx";


const httpLink = createHttpLink({
  uri: 'https://neptuno-app.herokuapp.com/graphql',
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem('token'));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  uri: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  const [userData, setUserData] = useState({});

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
        <AuthContext.Provider value={{ authToken, setAuthToken, setToken }}>
          <UserContext.Provider value={{ userData, setUserData }}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<PrivateLayout />}>
                  <Route path="" element={<User />} />
                  <Route path="/perfil" element={<User />} />
                  <Route path="/usuarios" element={<User_admin />} />
                  <Route path="/usuarios/editar/:_id" element={<Editar_usuario />} />
                  <Route path="/proyectos" element={<Proyectos />} />
                  {/* <MenuLateral /> */}
                  {/* <User /> */}
                  {/* <Registro /> */}
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
