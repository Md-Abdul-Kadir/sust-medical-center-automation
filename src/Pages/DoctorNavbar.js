
import { useHistory } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Tooltip,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Divider,
  IconButton,
  Typography,
  List,
  Toolbar,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import CreateIcon from "@mui/icons-material/Create";
//import Notifications from "./notifications";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import DateRangeIcon from "@mui/icons-material/DateRange";
import VideocamIcon from "@mui/icons-material/Videocam";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LogoutIcon from "@mui/icons-material/Logout";
import React,{useState,useContext,useEffect,createContext} from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavigationBar/Navbar.css";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import logo from "../Images/Banner/sustlogo/logo.png";
import callicon from "../Images/icons/phone-icons.png";
import amboIcon from "../Images/icons/ambulance-lights.png";
import Button from 'react-bootstrap/Button';
//import { AuthContext } from "../../helpers/AuthContext";
import Axios from 'axios';

const Navbar = () => {
  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false); 

  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
   });

   const [username, setUsername] = useState("");

    

  

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

  const logout = () => {
    localStorage.removeItem("accessToken");
    //setAuthState(false);
    setAuthState({ username: "", id: 0, status: false });
  };

  // OPEN AND CLOSE DRAWER FUNCTIONS
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* APPBAR */}
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#ff669e" }}>
        {/*<Toolbar>
          
          <Typography variant="h6" noWrap component="div">
            Medicare (Patients)
          </Typography>
  </Toolbar>*/}
        <nav className="navbar navbar-expand-lg text-light nav_color sticky-top navitem">
          <div className="container">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "5px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <Nav className="navbar-nav text-light me-auto">
                <Nav.Link className="text-light pe-3" as={Link} to="/home">
                  Home
                </Nav.Link>
               {/* <Nav.Link className="text-light px-3" as={Link} to="/treatment">
                  Treatment
                  </Nav.Link>*/}
                <Nav.Link
                  className="text-light px-2"
                  as={Link}
                  to="/appointment"
                >
                  Appointment
                </Nav.Link>
                <Nav.Link className="text-light px-3" as={Link} to="/clearance">
                  Clearance
                </Nav.Link>
                <Nav.Link className="text-light px-3" as={Link} to="/covidcare">
                  Covid-Care
                </Nav.Link>
                <Nav.Link className="text-light px-3" as={Link} to="/aboutus">
                  About Us
                </Nav.Link>
                <Nav.Link className="text-light ps-3 " as={Link} to="/contactus">
                  Contact 
                </Nav.Link>

              
              </Nav>


              <Nav className="my-auto">
              { !authState.status ? (
                <>
              <Nav.Link className="text-light px-3" as={Link} to="/login">
                LogIn
                </Nav.Link>
            
              <Button variant="outline-light my-0 py-0">
              <Nav.Link
                  className="text-light"
                  as={Link}
                  to="/register"
                >
                  Register
                  
                  
                </Nav.Link>
              </Button>
              </>
               ) : (
                <Button onClick={logout} variant="outline-light my-0 py-0">logout</Button>
                

               )
               }
             { (authState.status===true) && ( <Nav.Link className="text-light px-3" as={Link} to="/doctorprofile">
                {username}
              </Nav.Link> )}
              </Nav>
            </div>

           {/*<StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Profile" src="/broken-image.jpg" />
              </StyledBadge>*/}
          </div>
        </nav>
      </AppBar>

      {/* LEFT DRAWER */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        {/* LIST OF NAVIGATIONS */}
        <List>
          {/* DASHBOARD *
          <ListItem button component="a" href="/profile">
            <Tooltip title="Dashboard" placement="right">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Dashboard</ListItemText>
            </ListItem> */}

          {/* PROFILE */}
          <ListItem button component="a" href="/doctorprofile">
            <Tooltip title="Profile" placement="right">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Profile</ListItemText>
          </ListItem>

          {/* VIEW DOCTORS/BOOK APPOINTMENTS *
          <ListItem button component="a" href="/patient/view_doctors">
            <Tooltip title="Book Appointment" placement="right">
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Book Appointment</ListItemText>
          </ListItem>

          {/* NOTIFICATIONS */}
          <ListItem button component="a" href="/doctornotification">
            <Tooltip title="Notifications" placement="right">
              <ListItemIcon>
                <NotificationsIcon/>
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Notifications</ListItemText>
          </ListItem>

          {/* SCHEDULED MEETINGS *
          <ListItem button component="a" href="/patient/scheduled_meetings">
            <Tooltip title="Scheduled Meetings" placement="right">
              <ListItemIcon>
                <VideocamIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Scheduled Meetings</ListItemText>
          </ListItem>

          {/* PAST APPOINTMENTS *
          <ListItem button component="a" href="/patient/past_appointments">
            <Tooltip title="Past Appointments" placement="right">
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Past Appointments</ListItemText>
          </ListItem>

          {/* LATEST UPDATES 
          <ListItem button component="a" href="/patient/latest_updates">
            <Tooltip title="Latest Updates" placement="right">
              <ListItemIcon>
                <NewspaperIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Latest Updates</ListItemText>
          </ListItem> 
          */}

          
        </List>
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box> */}
    </Box>
  );
};

export default Navbar;

const drawerWidth = 240;

// OPENED DRAWER STYLING
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

// CLOSED DRAWER STYLING
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

// DRAWER HEADER STYLING
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// APPBAR STYLING
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// DRAWER STYLING
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));