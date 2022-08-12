import React,{useState,useEffect} from 'react';
import Navbar from '../DoctorNavbar';
import stethescopeicon from '../../Images/profileicon/stethescopeicon.png';
import nameicon from "../../Images/profileicon/name.png";
import eduicon from "../../Images/profileicon/edu.png";
import emailicon from "../../Images/profileicon/email.png";
import locationicon from "../../Images/profileicon/location.png";
import gendericon from "../../Images/profileicon/sex.png";
import idcard from "../../Images/profileicon/idcard.png";
import NavigationBar from "../NavigationBar/Navbar";
import Footer from "../Footer/Footer";
import avatar from '../../Images/profileicon/doctorvector.png';
import { Link } from "react-router-dom";
import './DoctorProfile.css';
import Axios from 'axios'


function DoctorProfile() {

    const [userList, setUserList] = useState([]);
  const [username, setUsername] = useState("");
  const [state,setState] = useState("True");
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
    
   });


  useEffect(() => {
    Axios
      .get("http://localhost:3001/authen", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          //setAuthState(false);
          setAuthState({ ...authState, status: false })
        } else if(response.data.email!= null)  {
          console.log(response);
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
            
          });
          setUsername(response.data.username);
          console.log(username);
          
        }
        else
        {
          //setAuthState(false);
          setAuthState({ ...authState, status: false })
        }
      });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/fetchDoctorProfile").then((response) => {
      setUserList(response.data);
      console.log(userList.length);
      setState("True");
      
      
      //console.log(response.data);
    });
  },[]);
  
    return (
    <>
     {/* <NavigationBar></NavigationBar>*/}
     <Navbar/>
      <div class="row py-5 px-4">
        <div class="col-md-8 mx-auto">
          <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 mb-5 cover">
              <div class="media align-items-end profile-head">
                <div class="profile mr-3 imgmargin">
                  <img
                    src={avatar}
                    alt="..."
                    width="140"
                    class="rounded mb-2 img-thumbnail"
                  />
                  <Link to="/doctorprofile-edit">
                    <button class="btn btn-outline-dark bg-theme text-light btn-block btnmargin">
                      Edit profile
                    </button>
                  </Link>
                </div>
                <div class="media-body mb-5 text-white">
                  <h5 class="mt-0 mb-0 txtmargin"></h5>
                  <p class="small mb-4">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                  </p>
                </div>
              </div>
            </div>
          
           
          {userList.map((val, key) => {
            if(val.username == username && state=="True") {
            return (

            <div class="px-4 py-5">
              <h5 class="my-3 text-start fw-bold text-theme">About</h5>
              <div class="p-md-4 p-3 rounded-3 shadow-sm bg-light">
                
                
                <div className="d-flex my-2">
                  <img width="25px" height="25px" src={nameicon} alt="" />
                  <p className="ps-3 my-auto">{val.firstName} {" "} {val.lastName}</p>
                </div>
                <div className="d-flex">
                  <img width="25px" height="25px" src={stethescopeicon} alt="" />
                  <p className="ps-3 my-auto ">
                    {val.speciality}
                  </p>
                </div>
                <div className="d-flex my-2">
                  <img width="25px" height="25px" src={idcard} alt="" />
                  <p className="ps-3 my-auto">{val.shortbio}</p>
                </div>
                <div className="d-flex">
                  <img width="25px" height="25px" src={emailicon} alt="" />
                  <p className="ps-3 my-auto">{val.mobileno}</p>
                </div>
                <div className="d-flex my-2">
                  <img width="25px" height="25px" src={locationicon} alt="" />
                  <p className="ps-3 my-auto">{val.workinghours}</p>
                </div>
                
              </div>
              
            </div>
          );
            }
        })} 
            
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
    )
    
  
}

export default DoctorProfile