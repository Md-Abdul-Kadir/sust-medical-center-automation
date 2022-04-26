import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import Aboutus from './Pages/Aboutus/Aboutus';

import OurTrainer from './Pages/OurTrainers/OurTrainer';
import Services from './Pages/Services/Services';
import Pricing from './Pages/Pricing/Pricing';
import Contactus from './Pages/Contactus/Contactus';
import CovidCare from './Pages/CovidCare/CovidCare';







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
          <Route path="/services">
          <Services></Services>
          </Route>       
          <Route path="/pricing">
          <Pricing></Pricing>
          </Route>     
          <Route path="/ourtrainer">
           <OurTrainer></OurTrainer>
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
