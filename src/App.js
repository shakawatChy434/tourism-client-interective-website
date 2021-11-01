// import { NotFound } from 'http-errors';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Login from './pages/Login/Login/Login';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import ServiceConfirm from './pages/Home/ServiceConfirm/ServiceConfirm';
import AddService from './pages/AddService/AddService';
import Register from './pages/Login/Register/Register';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/"><Home></Home></Route>
            <Route path="/home"><Home></Home></Route>
            <PrivateRoute path="/services/:serviceId"><ServiceConfirm></ServiceConfirm> </PrivateRoute>
            <PrivateRoute path="/addService"><AddService></AddService>  </PrivateRoute>
            <Route path="/login"><Login></Login> </Route>
            <Route path="/register"><Register></Register> </Route>
            <Route path="*"><NotFound></NotFound> </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
