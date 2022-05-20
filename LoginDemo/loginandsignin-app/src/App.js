import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Resigter/Register';
import Profile from './Pages/Profile/Profile';






function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login/>}></Route> 
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="*" element={<Notfound/>}>
          </Route>
          
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
