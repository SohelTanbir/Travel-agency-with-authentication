import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog'
import Destination from './components/Destination/Destination'
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';


const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/destination/:id">
              <Destination />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
