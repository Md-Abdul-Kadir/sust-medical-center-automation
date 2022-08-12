import React,{useState,useEffect} from 'react';
import Navbar from '../DoctorNavbar';
import avatar from '../../Images/profileicon/doctorvector.png';
import Axios from 'axios';




function DoctorProfileEdit() {


    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileno, setMobileno] = useState("");
    const [speciality, setSpeciality] = useState("");
    const [shortbio, setShortBio] = useState("");
    const [workinghours, setWorkingHours] = useState("");
    const [zoomlink, setZoomlink] = useState("");
    const [docList, setDocList] = useState([]);

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

      const updateDoctor = () => {
        Axios.put("http://localhost:3001/updatingDoctor", { username: username, firstName: firstName,lastName:lastName , mobileno : mobileno,speciality:speciality ,shortbio : shortbio , workinghours : workinghours , zoomlink:zoomlink}).then(
          (response) => {
            setDocList(
              docList.map((val) => {
                return val.username == username
                  ? {
                      username: val.username,
                      firstName: firstName,
                      lastName: lastName,
                      mobileno: mobileno,
                      speciality: speciality,
                      shortbio: shortbio,
                      workinghours : workinghours,
                      zoomlink : zoomlink,
                    }
                  : val;
              })
            );
          }
        );
      };


    
    return (
        <>
          <Navbar/>
          <div class="container rounded bg-white my-5 shadow-lg">
            <div class="row" >
              <div class="col-md-3 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img className="rounded mt-5" width="150px" src={avatar} />
                  <span class="font-weight-bold mt-3"></span>
                  <span class="text-black-50"></span>
                  <span> </span>
                </div>
              </div>
              <div class="col-md-5 border-right">
                <div class="p-3 py-5">
                  <div class="d-flex justify-content-between align-items-center">
                    <h4 class="text-right text-theme text-bold">Profile Settings</h4>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label class="labels">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="first name"
                        onChange={(e)=>{setFirstName(e.target.value);}}
                        
                       
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="labels">Surname</label>
                      <input
                        type="text"
                        class="form-control"
                        
                        placeholder="surname"
                        onChange={(e)=>{setLastName(e.target.value);}}
                      
                      />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-12">
                      <label class="labels">Contact No.</label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="enter your phone number"
                        onChange={(e)=>{setMobileno(e.target.value);}}
                        
                       
                      />
                    </div>
                    <div class="col-md-12">
                      <label class="labels">Speciality</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="enter your field of specialization"
                        onChange={(e)=>{setSpeciality(e.target.value);}}
                        
                        
                      />
                    </div>
                    <div class="col-md-12">
                      <label class="labels">Short Biography</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder='write something about yourself'
                        onChange={(e)=>{setShortBio(e.target.value);}}
                        
                        
                      
                      />
                    </div>
                    <div class="col-md-12">
                      <label class="labels">Visiting Hours</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder='enter your working hours'
                        onChange={(e)=>{setWorkingHours(e.target.value);}}
                        
                        
                        
                      />
                    </div>
                  </div>
                
                    <div class="col-md-12">
                      <label class="labels">Zoom Link</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your personal zoom link"
                        onChange={(e)=>{setZoomlink(e.target.value);}}
                        
                      />
                    </div>
                    
                
                  <div class="mt-5 text-center">
                    <button class="btn btn-primary bg-theme text-light w-50" type="button"  onClick={() => {
                        updateDoctor();
                      }}>
                      Save Profile
                    </button>
                  </div>
                </div>
              </div>
              {/*<div class="col-md-4">
                <div class="p-2 py-5">
                  <div class="d-flex justify-content-between experience">
                    <h4 className="text-theme">Edit Educational Info</h4>
                  </div>
                  <div class="col-md-12">
                    <label class="labels text-start">Departpment</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Dept."
                      value=""
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Registration No</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Reg. No"
                      value=""
                    />
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
          {/*<Footer></Footer>*/}
        </>
      );
}

export default DoctorProfileEdit