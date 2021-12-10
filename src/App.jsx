import { MenuLateral } from "./components/MenuLateral.jsx"
import { User } from './components/User.jsx';
import '../src/css/index.css';
import { Login } from './components/Login';
import { Registro } from "./components/Registro.jsx";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User_admin from "./components/Users_admin.jsx";


/* const httpLink = createHttpLink({
  uri: "https://neptuno-app.herokuapp.com/graphql"
}) */

const client = new ApolloClient({
  uri: "https://neptuno-app.herokuapp.com/graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/perfil" element={<User />} />
            <Route path="/usuarios" element={<User_admin />} />
            {/* <MenuLateral /> */}
            {/* <User /> */}
            {/* <Registro /> */}
            {/* <Consult /> */}
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;