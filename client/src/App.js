import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={Header}/>

         
      </Router>
     
    </div>
  );
}

export default App;
