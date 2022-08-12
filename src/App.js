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
import Patient_Profile from './Pages/PatientProfile';
import Dashboard from './Pages/dashboard';
import Profile from './Pages/Profile/Profile';
import ProfileEdit from './Pages/ProfileEdit/ProfileEdit';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import AdminLogin from './Pages/AdminLogin/AdminLogin';
import AdminProfile from './Pages/AdminDashboard/AdminProfile';
import AdminNotification from './Pages/AdminNotificatin';
import PatientNotification from './Pages/PatientNotification';
import DoctorProfile from './Pages/DoctorProfile/DoctorProfile';
import DoctorProfileEdit from './Pages/DoctorProfile/DoctorProfileEdit';
import DoctorNotification from './Pages/DoctorProfile/DoctorNotification';
import PatientScheduledMeeting from './Pages/PatientScheduledMeeting';








function App() {
  //const [authState, setAuthState] = useContext(AuthContext);
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
          <Route path="/patientprofile">
            <Patient_Profile></Patient_Profile>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/register">
          <Register></Register>
          </Route>
      
          <Route path="/profile">
          <Profile></Profile>
          </Route>
          <Route path="/profile-edit">
          <ProfileEdit></ProfileEdit>
          </Route>
          <Route path="/admin">
           <AdminDashboard></AdminDashboard>
          </Route>
          <Route path="/adminlogin">
           <AdminLogin></AdminLogin>
          </Route>
          <Route path="/adminprofile">
           <AdminProfile></AdminProfile>
          </Route>
          <Route path="/adminnotification">
           <AdminNotification></AdminNotification>
          </Route>
          <Route path="/patientnotification">
           <PatientNotification></PatientNotification>
          </Route>
          <Route path="/patientscheduledmeeting">
           <PatientScheduledMeeting></PatientScheduledMeeting>
          </Route>
          <Route path="/doctorprofile">
          <DoctorProfile></DoctorProfile>
          </Route>
          <Route path="/doctorprofile-edit">
          <DoctorProfileEdit></DoctorProfileEdit>
          </Route>
          <Route path="/doctornotification">
          <DoctorNotification></DoctorNotification>
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
