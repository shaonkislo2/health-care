
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Appointment from './components/Appointment/Appointment';
import Booking from './components/Booking/Booking';
import Doctors from './components/Home/Doctors/Doctors';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/Login/PrivateRoute/PrivateRoute';
import Register from './components/Login/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route exact path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/services">
          <Services></Services>
          </Route>
          <PrivateRoute exact path="/booking/:serviceId">
          <Booking></Booking>
          </PrivateRoute>
          <Route exact path="/doctors">
          <Doctors></Doctors>
          </Route>
          <PrivateRoute exact path="/about">
          <About></About>
          </PrivateRoute>
          <PrivateRoute exact path="/appointment">
          <Appointment></Appointment>
          </PrivateRoute>
          <Route exact path="/login">
          <Login></Login>
          </Route>
          <Route exact path="/register">
          <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
