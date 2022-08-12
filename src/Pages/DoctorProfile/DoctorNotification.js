import React,{useEffect,useState} from 'react';
import Navbar from '../DoctorNavbar';
import Axios from 'axios';
import Box from "@mui/material/Box";

function DoctorNotification() {

    const [appointlist,setAppointlist] = useState([]);
    const [zoomlink,setZoomlink] = useState("");
    const [meetingtime,setMeetingtime] = useState("");
    const [status,setStatus] = useState("Scheduled");
    const [username,setUsername] = useState("");
    const [doctorList,setDoctorList] = useState([]);
    const [authState, setAuthState] = useState({
        username: "",
        id: 0,
        status: false,
        
       });

    useEffect(() => {
        Axios.get("http://localhost:3001/fetchAppointDetails").then((response) => {
          setAppointlist(response.data);
          //console.log(userList.length);
          
          
          //console.log(response.data);
        });
      },[]);


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
          setDoctorList(response.data);
          //console.log(userList.length);
          {doctorList.map((val, key) => {
            if(val.username == username)
            {
                setZoomlink(val.zoomlink);
            }
          }
          )
        }
          
          
          //console.log(response.data);
        });
      },[]);


      const scheduling = (username,meetingtime) => {

        Axios.put("http://localhost:3001/updatingmeetingschedule", { username: username, meetingtime: meetingtime,status:status , zoomlink:zoomlink}).then(
          (response) => {
            console.log(response);
          }
        );

      }



  return (
    <>
    <Navbar/>
    <br/>
    <br/>
    <h1>Appointment Requests</h1>
    {appointlist.map((val, key) => {
         if(val.status==""){
          return (
            <Box sx={{ width: "100%" }} marginTop={10} marginBottom={8}>
            <div className="employee">
              <div>
                <h5>{val.name} {" "}
                request for a online appointment as he/she has been suffering from {val.symptom}</h5>
                <h5>Preffer Time: {val.prefferedtime}</h5>
                <h5>a short message: {val.symptomDetails}</h5>
                {/*<h3>Wage: {val.wage}</h3>*/}
                
              </div>
              <div>
                <button
                  onClick={() => {
                    scheduling(val.username,val.prefferedtime);
                  }}
                >
                  {" "}
                  Approve
                </button>
                 {"    "}
              </div>
            </div>
            </Box>
          );
                }
        })}
    </>
  )
}

export default DoctorNotification;