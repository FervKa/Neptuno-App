import { MenuLateral } from "./components/MenuLateral.jsx"
import { User } from './components/User.jsx';
import '../src/css/index.css';
import { Login } from './components/Login';
import { Registro } from "./components/Registro.jsx";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User_admin from "./components/Users_admin.jsx";
import { AuthLayout } from '../src/layouts/AuthLayout'
import { AuthContext } from "./context/authContext.js";
import { useState } from "react";


const httpLink = createHttpLink({
  uri: "https://neptuno-app.herokuapp.com/graphql"
})

const client = new ApolloClient({
  uri: "https://neptuno-app.herokuapp.com/graphql",
  cache: new InMemoryCache(),
})

function App() {

  const [authToken, setAuthToken] = useState("")

  const setToken =(token)=>{
    setAuthToken(token)
    if(token){
      localStorage.setItem('token',JSON.stringify(token))
    }
  }

  return (
    <>
      <ApolloProvider client={client}>
        <AuthContext.Provider value={{setToken}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<User />} />
              <Route path="/perfil" element={<User />} />
              <Route path="/usuarios" element={<User_admin />} />

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
