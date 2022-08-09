import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "react-bootstrap/Card";

const drawerWidth = 240;

export default function AdminDashboard() {
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["Doctors", "Students", "updates", "notification"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["logout"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
              <AppBar
            
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
            ></IconButton>
            <Typography variant="h6" noWrap component="div">
              SUST MEDICAL CENTER ADMIN
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            variant="temporary"
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />

          <Typography paragraph>
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 5 }}
              >
                <Grid xs={6}>
                  <Card
                    border="primary"
                    ClassName="w-100"
                    style={{ margin: "20px" }}
                  >
                     <Card.Body className="bg-theme text-light shadow">
                      <Card.Title className="my-3">Doctors</Card.Title>
                      <Card.Text></Card.Text>
                    </Card.Body>
                  </Card>
                </Grid>
                <Grid xs={6}>
                  <Card
                    border="primary"
                    ClassName="w-100"
                    style={{ margin: "20px" }}
                  >
                     <Card.Body className="bg-theme text-light shadow">
                      <Card.Title className="my-3">Students</Card.Title>
                      <Card.Text></Card.Text>
                    </Card.Body>
                  </Card>
                </Grid>
                <Grid xs={6}>
                  <Card
                    border="primary"
                    ClassName="w-100"
                    style={{ margin: "20px" }}
                  >
                    <Card.Body className="bg-theme text-light shadow">
                      <Card.Title className="my-3">Updates</Card.Title>
                      <Card.Text></Card.Text>
                    </Card.Body>
                  </Card>
                </Grid>
                <Grid xs={6}>
                  <Card
                    border="primary"
                    ClassName="w-100"
                    style={{ margin: "20px" }}
                  >
                    <Card.Body className="bg-theme text-light shadow">
                      <Card.Title className="my-3"> Notification</Card.Title>
                      <Card.Text></Card.Text>
                    </Card.Body>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Typography>
          <Typography paragraph></Typography>
        </Box>
      </Box>
     
    </>
  );
}
