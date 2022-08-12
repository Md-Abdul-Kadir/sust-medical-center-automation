import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import akashdp from "../../Images/Profilep/akashpp.png";
import nameicon from "../../Images/profileicon/name.png";
import eduicon from "../../Images/profileicon/edu.png";
import emailicon from "../../Images/profileicon/email.png";
import locationicon from "../../Images/profileicon/location.png";
import gendericon from "../../Images/profileicon/sex.png";
import idcard from "../../Images/profileicon/idcard.png";
import NavigationBar from "../NavigationBar/Navbar";
import Footer from "../Footer/Footer";
import avatar from "../../Images/profileicon/Avatar02-512.png";
import Navbar from "../PatientNavbar";
import Axios from "axios"

const Profile = () => {

  const [userList, setUserList] = useState([]);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [sex, setSex] = useState("");
  const [dept, setDept] = useState("");
  const [reg, setReg] = useState("");


  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
    
   });

   const [user,setUser] = useState({
    name : "",
    dept : "",
    reg : "",
   })

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
    Axios.get("http://localhost:3001/fetchProfile").then((response) => {
      setUserList(response.data);
      console.log(userList.length);
      
      
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
                  <Link to="/profile-edit">
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
            {/* <div class="bg-light p-4 d-flex justify-content-end text-center">
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <h5 class="font-weight-bold mb-0 d-block">215</h5>
                  <small class="text-muted">
                    <i class="fas fa-image mr-1"></i>Photos
                  </small>
                </li>
                <li class="list-inline-item">
                  <h5 class="font-weight-bold mb-0 d-block">745</h5>
                  <small class="text-muted">
                    <i class="fas fa-user mr-1"></i>Followers
                  </small>
                </li>
                <li class="list-inline-item">
                  <h5 class="font-weight-bold mb-0 d-block">340</h5>
                  <small class="text-muted">
                    <i class="fas fa-user mr-1"></i>Following
                  </small>
                </li>
              </ul>
            </div> 
            {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Name: {val.name}</h3>
                <h3>Age: {val.age}</h3>
                <h3>Country: {val.country}</h3>
                <h3>Position: {val.position}</h3>
                <h3>Wage: {val.wage}</h3>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setNewWage(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateEmployeeWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}*/}
           
           {userList.map((val, key) => {
            if(val.username == username) {
          return (

            <div class="px-4 py-5">
              <h5 class="my-3 text-start fw-bold text-theme">About</h5>
              <div class="p-md-4 p-3 rounded-3 shadow-sm bg-light">
                
                <div className="d-flex my-2">
                  <img width="25px" height="25px" src={nameicon} alt="" />
                  <p className="ps-3 my-auto">{val.name}</p>
                </div>
                <div className="d-flex">
                  <img width="25px" height="25px" src={eduicon} alt="" />
                  <p className="ps-3 my-auto ">
                    {val.dept}
                  </p>
                </div>
                <div className="d-flex my-2">
                  <img width="25px" height="25px" src={idcard} alt="" />
                  <p className="ps-3 my-auto">{val.reg}</p>
                </div>
                <div className="d-flex">
                  <img width="25px" height="25px" src={emailicon} alt="" />
                  <p className="ps-3 my-auto">akashsust55@gmail.com</p>
                </div>
                <div className="d-flex my-2">
                  <img width="25px" height="25px" src={locationicon} alt="" />
                  <p className="ps-3 my-auto">Akhaliya Sylhet</p>
                </div>
                <div className="d-flex">
                  <img
                    width="25px my-auto"
                    height="25px"
                    src={gendericon}
                    alt=""
                  />
                  <p className="ps-3">{val.sex}</p>
                </div>
              </div>
            </div>
          );
            }
        })}
            <div class="py-4 px-4">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <h5 class="mb-0">Recent Prescriptions</h5>
              </div>
              <div class="row">
                <div class=" my-2 pr-lg-1 d-flex bg-theme p-2 rounded-3 text-light">
                  <date className="my-auto w-25">22/7/2020</date>
                  <p className="my-auto w-50">Headaches and Fever </p>
                  <button className="btn btn-danger w-25">view details</button>
                              </div>
                              <div class=" my-2 pr-lg-1 d-flex bg-theme p-2 rounded-3 text-light">
                  <date className="my-auto w-25">10/7/2020</date>
                  <p className="my-auto w-50">Common cold</p>
                  <button className="btn btn-danger w-25">view details</button>
                              </div>
                              <div class=" my-2 pr-lg-1 d-flex bg-theme p-2 rounded-3 text-light">
                  <date className="my-auto w-25">02/7/2020</date>
                  <p className="my-auto w-50">Low pressure</p>
                  <button className="btn btn-danger w-25">view details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Profile;