import React from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
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
    backgroundColor: "transparent",
    bottom: "10px",
    margin: "0 auto",
    maxWidth: "500px",
    minWidth: "max-content",
    position: "fixed",
  },
});

const Footer = (props) => {
  const classes = useStyles();

  return (
    <Grid align-items="center" justify="center" container>
      <BottomNavigation className={classes.root} showLabels>
        <BottomNavigationAction
          component={Link}
          to={ROUTES.LANDING}
          label={props.user ? "Profile" : "Login"}
          icon={<AccountCircleIcon style={classes.root.icon} />}
        />
        <BottomNavigationAction
          component={Link}
          to={ROUTES.TIMER}
          label="Timer"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to={ROUTES.RESOURCES}
          label="Resources"
          icon={<LibraryBooksIcon />}
        />
        {props.user && (
          <BottomNavigationAction
            component={Link}
            to={ROUTES.LANDING}
            onClick={props.firebase.doSignOut}
            label="Sign Out"
            icon={<ExitToAppIcon />}
          />
        )}
        {/* </Tabs> */}
      </BottomNavigation>
    </Grid>
  );
};

export default withFirebase(Footer);
