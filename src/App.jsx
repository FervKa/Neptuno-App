import { MenuLateral } from "./components/MenuLateral.jsx"
import { User } from './components/User.jsx';
import '../src/css/index.css';
import { Login } from './components/Login';
import { Registro } from "./components/Registro.jsx";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import Consult from "./components/Consult.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";



const httpLink = createHttpLink({
  uri: "https://neptuno-app.herokuapp.com/graphql"
})

const client = new ApolloClient({
  uri: { httpLink },
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
            <Route path="/usuarios" element={<Consult />} />
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
