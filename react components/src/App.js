import logo from './logo.svg';
import './App.css';
import { Store } from './components/Demo'; // named functional component
import Copy from './components/Demo'; // default functional component
import Welcome from './components/welcome'; // class component

function App() {

  return (
    <div className="app">
      <h2>REACT app JS</h2>
      <Store />
      <Copy />
      <Welcome />
    </div>
  );
}


export default App; 