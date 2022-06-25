import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import Aboutus from './Pages/Aboutus/Aboutus';
import Contactus from './Pages/Contactus/Contactus';
import CovidCare from './Pages/CovidCare/CovidCare';
import Appointment from './Pages/Appointment/Appointment';
import Clearance from './Pages/Clearance/Clearance';
import Treatment from './Pages/Treatment/Treatment';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';







function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route path="/covidcare">
          <CovidCare></CovidCare>
          </Route>
          <Route path="/aboutus">
           <Aboutus></Aboutus>
          </Route>
          <Route path="/contactus">
          <Contactus></Contactus>
          </Route>
          <Route path="/appointment">
          <Appointment></Appointment>
          </Route>       
          <Route path="/clearance">
          <Clearance></Clearance>
          </Route>     
          <Route path="/treatment">
           <Treatment></Treatment>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/register">
          <Register></Register>
          </Route>
          <Route path="/profile">
          <Home></Home>
          </Route>
          <Route path="*">
          <Notfound></Notfound>
          </Route>
          
        </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
