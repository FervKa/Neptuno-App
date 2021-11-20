//MongoDB, Moongoose
import conectarBD from './db/db';
import CRUDusuarios from './cruds/CRUDusuarios';
import CRUDproyectos from './cruds/CRUDproyectos';
import CRUDinscripciones from './cruds/CRUDinscripciones';
import CRUDavances from './cruds/CRUDavances';

//GraphQL y createApplication
import {ApolloServer, gql} from 'apollo-server'


// const main = async () => {
//   await conectarBD();

//   // await CRUDusuarios.createUser();
//   // await CRUDusuarios.readUsers();
//   // await CRUDusuarios.readOneUser();
//   // await CRUDusuarios.updateUser();
//   // await CRUDusuarios.deleteUser();

//   // await CRUDproyectos.createProject();
//   // await CRUDproyectos.readProjects();
//   // await CRUDproyectos.readOneProject();
//   // await CRUDproyectos.updateProject();
//   // await CRUDproyectos.deleteProyect();

//   // await CRUDinscripciones.createApplication();
//   // await CRUDinscripciones.readApplications();
//   // await CRUDinscripciones.updateApplication();
//   // await CRUDinscripciones.deleteApplication();

//   // await CRUDavances.createProgress();
//   // await CRUDavances.readProgresss();
//   // await CRUDavances.updateProgress();
//   // await CRUDavances.deleteProgress();
  
// };

// main();

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};




// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

