import React from 'react';
import { useState,useEffect } from 'react';
import AdminNavbbar from './AdminNavbar';
import Axios from "axios";
import Box from "@mui/material/Box";

function AdminNotificatin() {

    const [clearancelist,setClearancelist] = useState([]);
    const [reg,setReg] = useState("");
    const [status,setStatus] = useState("Approved");

    useEffect(() => {
        Axios.get("http://localhost:3001/fetchClearance").then((response) => {
          setClearancelist(response.data);
          //console.log(userList.length);
          
          
          //console.log(response.data);
        });
      },[]);

      const approving = (reg) => {
        Axios.post("http://localhost:3001/approvedclearanceData" , {reg:reg,status:status}).then((response) => {
      console.log(response);
      //navigate.push("/")
    });
      }

      

  return (
    <>
      <AdminNavbbar/> 
    <div>AdminNotificatin</div>
    <br/>
    <br/>
    <h1>Clearance Requests</h1>
    {clearancelist.map((val, key) => {
          return (
            <Box sx={{ width: "100%" }} marginTop={10} marginBottom={8}>
            <div className="employee">
              <div>
                <h4>Name: {val.firstName} {val.lastName}</h4>
                <h5>Reg: {val.reg}</h5>
                <h5>Dept: {val.dept}</h5>
                <h5>Session: {val.session}</h5>
                {/*<h3>Wage: {val.wage}</h3>*/}
                
              </div>
              <div>
                <button
                  onClick={() => {
                    approving(val.reg);
                  }}
                >
                  {" "}
                  Approve
                </button>
                 {"    "}

                <button
                  
                >
                  Done
                </button>
              </div>
            </div>
            </Box>
          );
        })}
    </>
  )
}

export default AdminNotificatin