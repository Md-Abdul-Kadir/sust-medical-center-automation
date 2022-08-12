const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {sign} = require('jsonwebtoken');




const app = express();

app.use(express.json());
app.use(cors());
const saltRounds = 10;

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "medicalcenter",
  });


  app.post("/register" , (req,res)=>{

    const username = req.body.username; // getting variable from frontend
    const password = req.body.password;
    const email =req.body.email;
    const role = req.body.role;
    

    bcrypt.hash(password,saltRounds,(err,hash)=>{

      if (err) {
        console.log(err);
      }

      db.query("SELECT * FROM users WHERE username=? ;",username, (err,result)=>{
        if(err){
          //console.log(err);
          res.send({err: err});
        }
        else if((result.length>0))
        {
          res.send({message:"username already existed"});

        }
        else
        {
          db.query("INSERT INTO users (username, password,email,role) VALUES (?,?,?,?)", [username,hash,email,role],
      (err, result) => {
        if(err){
        console.log(err);}
        else{
          res.send("Successfully registered");
        }
      }
      );

      if(role=='patient'){
      db.query("INSERT INTO userdetails (username) VALUES (?)", [username],
      (err, result) => {
        if(err){
        console.log(err);}
        else{
          //res.send("Successfully registered");
        }
      }
      );
    }
    else
    {
      db.query("INSERT INTO doctordetails (username) VALUES (?)", [username],
      (err, result) => {
        if(err){
        console.log(err);}
        else{
          //res.send("Successfully registered");
        }
      }
      );

    }

        }
      })

      
     
    });

    
  });

  app.post("/adminregister" , (req,res)=>{

    const username = req.body.username; // getting variable from frontend
    const password = req.body.password;
    const email =req.body.email;
   // const role = req.body.role;
    

    bcrypt.hash(password,saltRounds,(err,hash)=>{

      if (err) {
        console.log(err);
      }

      db.query("SELECT * FROM admin WHERE username=? ;",username, (err,result)=>{
        if(err){
          //console.log(err);
          res.send({err: err});
        }
        else if((result.length>0))
        {
          res.send({message:"username already existed"});

        }
        else
        {
          db.query("INSERT INTO admin (username, email,password) VALUES (?,?,?)", [username,email,hash],
      (err, result) => {
        if(err){
        console.log(err);}
        else{
          res.send("Successfully registered");
        }
      }
      );


      

        }
      })

      
     
    });

    
  });



  app.post("/login" , (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    const role  = req.body.role;

 

  db.query("SELECT * FROM users WHERE email = ? AND role = ? ;", [email,role],
    (err, result) => {
      if(err){
      //console.log(err);
      res.send({err: err});
    }
      
      
      
        if(result.length>0){
          //res.send(result);
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {
              // req.session.user = result; //creating a session
              //console.log("logged in");
              
              const accessToken = sign({email:result[0].email,id:result[0].id,password:result[0].password,username:result[0].username}, "subscribe");
              //console.log(result[0].id);
              res.json(accessToken);
              //res.send(result);
              //res.send({message : "User logged in!!"});

            } else {
              res.send({ message: "Wrong username/password combination!"});
            }
          });
        }
        else{
          res.send({message : "User doesn't exist"});
        }
      
    }
    );


  });


  app.post("/adminlogin" , (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

 

  db.query("SELECT * FROM admin WHERE email = ? ;", email,
    (err, result) => {
      if(err){
      //console.log(err);
      res.send({err: err});
    }
      
      
      
        if(result.length>0){
          //res.send(result);
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {
              // req.session.user = result; //creating a session
              //console.log("logged in");
              
              const accessToken = sign({email:result[0].email,id:result[0].id,password:result[0].password,username:result[0].username}, "subscribe");
              //console.log(result[0].id);
              res.json(accessToken);
              //res.send(result);
              //res.send({message : "User logged in!!"});

            } else {
              res.send({ message: "Wrong username/password combination!"});
            }
          });
        }
        else{
          res.send({message : "User doesn't exist"});
        }
      
    }
    );


  });

  app.post("/updateData" , (req,res)=>{

    const name = req.body.name; // getting variable from frontend
    const age = req.body.age;
    //const email =req.body.email;
    //const role = req.body.role;
    

    

     
        db.query("INSERT INTO details (name, age) VALUES (?,?)", [name,age],
      (err, result) => {
        if(err){
        console.log(err);}
        else{
          res.send("Successfully Updated");
        }
      }
      );

       
  });

  app.post("/clearanceData" , (req,res)=>{

    const firstName = req.body.firstName; // getting variable from frontend
    const lastName = req.body.lastName;
    const reg =req.body.reg;
    const session = req.body.session;
    const purpose = req.body.purpose;
    const dept  = req.body.dept;
    

    

     
        db.query("INSERT INTO clearance (firstName,lastName,reg,session,dept,purpose) VALUES (?,?,?,?,?,?)", [firstName,lastName,reg,session,dept,purpose],
      (err, result) => {
        if(err){
        console.log(err);}
        else{
          res.send("Successfully updated the clearance data!!!");
        }
      }
      );

       
  });

  app.post("/approvedclearanceData" , (req,res)=>{

    
    const reg =req.body.reg;
    const status = req.body.status;
    
    

    

     
        db.query("INSERT INTO approvedclearance (reg,status) VALUES (?,?)", [reg,status],
      (err, result) => {
        if(err){
        console.log(err);}
        else{
          res.send("Successfully updated the clearance data!!!");
        }
      }
      );

       
  });

  app.post("/appointdetails" , (req,res)=>{

    const  username = req.body.username; // getting variable from frontend
    const name = req.body.name;
    const email =req.body.email;
    const mobileno = req.body.mobileno;
    const symptom = req.body.symptom;
    const date  = req.body.date;
    const prefferedtime = req.body.prefferedtime;
    const symptomDetails = req.body.symptomDetails;


    

    

     
        db.query("INSERT INTO appointdetails (username,name,email,mobileno,symptom,date,prefferedtime,symptomDetails) VALUES (?,?,?,?,?,?,?,?)", [username,name,email,mobileno,symptom,date,prefferedtime,symptomDetails],
      (err, result) => {
        if(err){
        console.log(err);}
        else{
          res.send("Successfully updated the clearance data!!!");
        }
      }
      );

       
  });




  app.put("/updating", (req, res) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const sex = req.body.sex;
    const mobileno = req.body.mobileno;
    const dept = req.body.dept;
    const reg = req.body.reg;
    const username = req.body.username;
    db.query(
      "UPDATE userdetails SET name = ?,surname = ?, mobileno = ? ,sex = ? , dept = ? , reg = ? WHERE username = ?",
      [name, surname,mobileno,sex,dept,reg,username],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.put("/updatingDoctor", (req, res) => {
    const username = req.body.username;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const mobileno = req.body.mobileno;
    const speciality = req.body.speciality;
    const shortbio = req.body.shortbio;
    const workinghours = req.body.workinghours;
    const zoomlink = req.body.zoomlink;
    db.query(
      "UPDATE doctordetails SET firstName = ?,lastName = ?, mobileno = ? ,speciality = ? , shortbio = ? , workinghours = ? , zoomlink = ? WHERE username = ?",
      [firstName, lastName,mobileno,speciality,shortbio,workinghours,zoomlink,username],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.put("/updatingmeetingschedule", (req, res) => {
    const username = req.body.username;
    const meetingtime = req.body.meetingtime;
    const status = req.body.status;
    
    const zoomlink = req.body.zoomlink;
    db.query(
      "UPDATE appointdetails SET status = ?,zoomlink = ?, meetingtime = ? WHERE username = ?",
      [status,zoomlink,meetingtime,username],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  })

  app.get("/fetchData", (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/fetchProfile", (req, res) => {
    db.query("SELECT * FROM userdetails", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/fetchAppointDetails", (req, res) => {
    db.query("SELECT * FROM appointdetails", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/fetchDoctorProfile", (req, res) => {
    db.query("SELECT * FROM doctordetails", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/fetchClearance", (req, res) => {
    db.query("SELECT * FROM clearance", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/fetchApproved", (req, res) => {
    db.query("SELECT * FROM approvedclearance", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


  app.delete("/delete/:username", (req, res) => {
    const username = req.params.username;
    db.query("DELETE FROM appointdetails WHERE username = ?", username, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  const valToken = (req, res, next) => {
    const accessToken = req.header("accessToken");
    //console.log(accessToken);
  
    if (!accessToken) return res.json({ message: "User not logged in!" });
  
    try {
      const validToken = jwt.verify(accessToken, "subscribe");
      //const usernameV = validToken.password; its basically the data that we stored as our token
      
      req.user = validToken ; //it can accessible from all routes that validtoken stores what info
      //console.log(validToken);
  
      if (validToken) {
        return next();
      }
    } catch (err) {
      return res.json({ message: err });
    }
  };


  app.get("/authen",valToken,(req, res) => {
    //console.log(req.user);
    res.json(req.user);
    });


app.listen(3001, () => {
    console.log("running server");
  });