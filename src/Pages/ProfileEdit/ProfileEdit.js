import React, { useEffect ,useState} from "react";
import "./ProfileEdit.css";
import akashdp from "../../Images/Profilep/akashpp.png";
import NavigationBar from "../NavigationBar/Navbar";
import Footer from "../Footer/Footer";
import Navbar from "../PatientNavbar";
import avatar from "../../Images/profileicon/Avatar02-512.png";
import Axios from "axios";


const ProfileEdit = () => {



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
    Axios.get("http://localhost:3001/fetchData").then((response) => {
      //setUserList(response.data);
      //console.log(response.data);
    });
  },[]);


  const updateUser = () => {
    Axios.put("http://localhost:3001/updating", { name: name, surname: surname , mobileno : mobileno,sex:sex ,dept : dept , reg : reg , username:username}).then(
      (response) => {
        setUserList(
          userList.map((val) => {
            return val.username == username
              ? {
                  username: val.username,
                  name: name,
                  surname: surname,
                  sex: sex,
                  mobileno: mobileno,
                  dept: dept,
                  reg : reg,
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
                    
                    onChange={(e)=>{setName(e.target.value);}}
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Surname</label>
                  <input
                    type="text"
                    class="form-control"
                    
                    placeholder="surname"
                    onChange={(e)=>{setSurname(e.target.value);}}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Mobile Number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter phone number"
                    
                    onChange={(e)=>{setMobileno(e.target.value);}}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Sex</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Sex"
                    
                    onChange={(e)=>{setSex(e.target.value);}}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Dept</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter dept"
                    
                    onChange={(e)=>{setDept(e.target.value);}}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Reg No</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter reg no"
                    
                    onChange={(e)=>{setReg(e.target.value);}}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="labels">Country</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="country"
                    
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Division</label>
                  <input
                    type="text"
                    class="form-control"
                    
                    placeholder="Division"
                  />
                </div>
              </div>
              <div class="mt-5 text-center">
                <button class="btn btn-primary bg-theme text-light w-50" type="button"  onClick={() => {
                    updateUser();
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
};

export default ProfileEdit;