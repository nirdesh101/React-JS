import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header'
import Todo from './Components/Todo';


function App() {

  return (
    <>
      <div>
        <Header/>
        <Todo  />  

      </div>
    </>
  );
}

export default App;