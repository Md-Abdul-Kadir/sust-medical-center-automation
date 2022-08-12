import React, { useState } from "react";
import "./Clearance.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import NavigationBar from "../NavigationBar/Navbar";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Footer from "../Footer/Footer";
import logo from '../../Images/Banner/sustlogo/logo.png';
import Axios from "axios";
import { useHistory } from 'react-router-dom';

const depts = [
  {
    value: "CSE",
    label: "CSE",
  },
  {
    value: "EEE",
    label: "EEE",
  },
  {
    value: "SWE",
    label: "SWE",
  },
  {
    value: "ME",
    label: "ME",
  },
  {
    value: "CEE",
    label: "ME",
  },
  {
    value: "PME",
    label: "PME",
  },
  {
    value: "GEB",
    label: "GEB",
  },
  {
    value: "IPE",
    label: "IPE",
  },
];

const steps = ["Application form","Verification", "Pending", "Approved"];


const Clearance = () => {
  //const [dept, setDept] = React.useState("CSE");
  const handleChange = (event) => {
    setDept(event.target.value);
  };


  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [purpose,setPurpose] = useState("");
  const [reg,setReg] = useState("");
  const [dept,setDept] = useState("CSE");
  const [session,setSession] = useState("");
  const navigate = useHistory();

  const clearance = () => { // sending variables to backend
    Axios.post("http://localhost:3001/clearanceData" , {firstName:firstName , lastName:lastName,reg:reg,session:session,dept:dept,purpose:purpose}).then((response) => {
      console.log(response);
      navigate.push("/")
    });
  };

  return (
    <div>
      <NavigationBar> </NavigationBar>
      <div className="top-banner">
        <h3 className="big-txt"> Medical Clearance </h3>
        {/*<p className="text-white"> Home / Clearance </p>*/}
      </div>
      {/* steps at top */}
      <Container fixed>
        <Box sx={{ width: "100%" }} marginTop={10} marginBottom={8}>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel> {label} </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        {/* application form */}

        <Box sx={{ width: "100%" }} marginBottom={20} border={2} padding={5}>
                  <img height="110px" src={logo} alt="" />
                  <h3 className="mt-4">Shahjalal University of Science and technology, Sylhet</h3>
          <h4 className="mb-5 fw-bold text-theme pb-md-5 pt-3">
            Medical Clearance Application Form
          </h4>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4} marginBottom={3}>
              <TextField fullWidth label="First Name" id="firstName"  onChange={(e)=>{setFirstName(e.target.value);}} />
            </Grid>
            <Grid item xs={4} marginBottom={3} >
              <TextField fullWidth label="Last Name" id="lastName"  onChange={(e)=>{setLastName(e.target.value);}}/>
            </Grid>
            <Grid item xs={4} marginBottom={3} >
              <TextField fullWidth label="Purpose" id="purpose" onChange={(e)=>{setPurpose(e.target.value);}}/>
            </Grid>
            <Grid item xs={6}>
              <TextField
                marginTop={5}
                fullWidth
                label="Registration No."
                id="registration"
                onChange={(e)=>{setReg(e.target.value);}}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-select-currency"
                fullWidth
                label="Department"
                select
                value={dept}
                onChange={handleChange}
              >
                {depts.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                marginTop={5}
                fullWidth
                label="Session"
                id="Session"
                onChange={(e)=>{setSession(e.target.value);}}
              />
            </Grid>
                  </Grid>
                  

          <Stack direction="row" spacing={2} marginTop={10}>
            <Button size="medium" variant="contained" onClick={clearance}>SUBMIT</Button>
            <Button size="medium" variant="contained" disabled >
              NEXT
            </Button>
            
          </Stack>
        </Box>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Clearance;
