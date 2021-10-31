// import { NotFound } from 'http-errors';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home/Home';
import TouristPackeges from './pages/Home/TouristPackeges/TouristPackeges';
import TouristServices from './pages/Home/TouristServices/TouristServices';
import Login from './pages/Login/Login/Login';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/home"><Home></Home></Route>
          <Route path="/service"><TouristServices></TouristServices> </Route>
          <Route path="/package"><TouristPackeges></TouristPackeges> </Route>
          <Route path="/contact"><Contact></Contact> </Route>
          <Route path="/register"><Register></Register> </Route>
          <Route path="/login"><Login></Login> </Route>
          <Route path="*"><NotFound></NotFound> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
