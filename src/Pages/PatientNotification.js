import React from 'react';
import { useState ,useEffect} from 'react';
import PatientNavbar from "./PatientNavbar";
import Axios from "axios";
import Box from "@mui/material/Box";
import DownloadIcon from "@mui/icons-material/Download";
import logo from '../Images/Banner/sustlogo/logo.png';
import { jsPDF } from "jspdf";
import {
    IconButton,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    List,
    ListItem,
    Typography,
    Divider,
    Tooltip,
  } from "@mui/material";

function PatientNotification() {

    const [username,setUsername] = useState("");
    const [reg,setReg] = useState("");
    const [userList, setUserList] = useState([]);
    const [userCList, setUserCList] = useState([]);
    const [userAppList, setUserAppList] = useState([]);
    const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  
  const [dept, setDept] = useState("");
  const [session, setSession] = useState("");
  const [status,setStatus] = useState("");



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
              //setAuthState(false);
              //setAuthState(true);
              //console.log(a);
              setAuthState({
                username: response.data.username,
                id: response.data.id,
                status: true,
              });
              setUsername(response.data.username);
              console.log(authState);
              
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
          setUserCList(response.data);
          console.log(userCList.length);
          {userCList.map((val, key) => {
            if(val.username == username)
            {
                setReg(val.reg);

            }
          }
          )
        }
          
          
          //console.log(response.data);
        });
      },[]);



      useEffect(() => {
        Axios.get("http://localhost:3001/fetchClearance").then((response) => {
          setUserList(response.data);
          console.log(userList.length);
          {userList.map((val, key) => {
            if(val.reg == reg)
            {
                setfirstName(val.firstName);
                setlastName(val.lastName);
                setSession(val.session);
                setDept(val.dept);
            }
          }
          )
        }
          
          
          //console.log(response.data);
        });
      },[]);


      useEffect(() => {
        Axios.get("http://localhost:3001/fetchApproved").then((response) => {
          setUserAppList(response.data);
          console.log(userAppList.length);
          {userAppList.map((val, key) => {
            if(val.reg == reg)
            {
                setStatus(val.status);

            }
          }
          )
        }
          
          
          //console.log(response.data);
        });
      },[]);


      //DOWNLOAD PRESCRIPTION FUNCTION
  const downloadPrescription = () => {
    var doc = new jsPDF();
    
    doc.setFontSize("15");
    doc.addImage(logo, "PNG", 5, 5, 20, 15);
    doc.text("Shahjalal University of Science and Technology", 20, 30);
    doc.text("Medical Clearance", 20, 40);
    doc.text("This is a medical clearance belongs to", 20, 50);
    doc.text(firstName+lastName, 20, 70);
    doc.text("Who is a student of"+dept, 50, 70);
    
    
    doc.save("doctor_prescription.pdf");
  };



      



  return (
    <>
    <PatientNavbar/>
    <div>PatientNotification</div>
    if(status=="Approved"){
        <Box sx={{ width: "100%" }} marginTop={10} marginBottom={8}>
        <div >
          <h1>Clearance Application is approved!!</h1>
          <div>
            
             {"    "}

            <Button
            onClick={downloadPrescription}
            style={{
                textTransform: "none",
                margin: "2%",
              }}
              startIcon={<DownloadIcon />}
              
            >
              Download
            </Button>
          </div>
        </div>
        </Box>

    }
    </>
  )
}

export default PatientNotification
