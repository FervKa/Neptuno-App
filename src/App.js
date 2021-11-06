import logo from './images/neptuno.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Nepuno, Aplicación de gestión de proyectos
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proximamente
        </a>
      </header>
    </div>
  );
}

export default App;
