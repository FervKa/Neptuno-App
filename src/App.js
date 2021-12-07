import {MenuLateral} from "./components/MenuLateral.jsx"
import { User } from './components/User.jsx';
import '../src/css/index.css';
import { Login } from './components/Login';
import { Registro } from "./components/Registro.jsx";
import{ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client'

const httpLink = createHttpLink({
  uri: 'https://neptuno-app.herokuapp.com/graphql',
})


const client = new ApolloClient({
  uri: '',
  cache: new InMemoryCache()
});

function App() {


  return (
    <ApolloProvider>

      {/* <MenuLateral /> */}
      {/* <User /> */}
      {<Login />}
      {/* <Registro /> */}

    </ApolloProvider>
    
  );
}

export default App;
