import React from 'react';
import { useState,useEffect } from 'react';
import PatientNavbar from './PatientNavbar';
import Axios from 'axios';
import { Box } from '@mui/material';
import { useHistory } from 'react-router-dom';

function PatientScheduledMeeting() {

    const [username,setUsername] = useState("");
    const [appointlist,setAppointlist] = useState([]);
    const navigate = useHistory();
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
        Axios.get("http://localhost:3001/fetchAppointDetails").then((response) => {
          setAppointlist(response.data);
          //console.log(userList.length); 
          //console.log(response.data);
        });
      },[]);

      const joinedmeeting = (username) => {
        Axios.delete(`http://localhost:3001/delete/${username}`).then((response) => {
           // navigate.push("/patientscheduledmeeting");
           setAppointlist(
            appointlist.filter((val) => {
              return val.username != username;
            })
          );
        
    });

      }


  return (
    <>
    <PatientNavbar/>
    {appointlist.map((val, key) => {
         if(val.username==username){
          return (
            <Box sx={{ width: "100%" }} marginTop={10} marginBottom={8}>
            <div className="employee">
              <div>
                <h5>A zoom metting is scheduled at {val.prefferedtime}</h5>
                <h5>the meeting link:{val.zoomlink}</h5>
                
                {/*<h3>Wage: {val.wage}</h3>*/}
                
              </div>
              <div>
                <button
                  onClick={() => {
                    joinedmeeting(val.username);
                  }}
                >
                  {" "}
                  Done
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

export default PatientScheduledMeeting;