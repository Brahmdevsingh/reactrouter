import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Switch>
    <Route exact path='/'component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
