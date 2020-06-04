import React from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import * as ROUTES from "../../constants/routes";

const useStyles = makeStyles({
  root: {
    bottom: "20px",
    minWidth: "max-content",
    position: "fixed",
    width: "40vw",
    backgroundColor: "white",
  },
});

const Footer = (props) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Tabs
        centered
        variant="scrollable"
        scrollButtons="on"
        indicatorColor="primary"
        textColor="primary"
        aria-label="scrollable force tabs example"
      >
        <Tab
          component={Link}
          to={ROUTES.LANDING}
          label={props.user ? "Profile" : "Login"}
          icon={<AccountCircleIcon style={classes.root.icon} />}
        />
        <Tab
          component={Link}
          to={ROUTES.TIMER}
          label="Timer"
          icon={<RestoreIcon />}
        />
        <Tab
          component={Link}
          to={ROUTES.RESOURCES}
          label="Resources"
          icon={<LibraryBooksIcon />}
        />
        {props.user && (
          <Tab
            component={Link}
            to={ROUTES.LANDING}
            onClick={props.firebase.doSignOut}
            label="Sign Out"
            icon={<ExitToAppIcon />}
          />
        )}
      </Tabs>
    </AppBar>
  );
};

export default withFirebase(Footer);
