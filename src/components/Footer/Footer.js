import React from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import * as ROUTES from '../../constants/routes';

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    minWidth: 'max-content',
    width: '50%',
    position: 'fixed',
    bottom: '20px'
  },
});

const Footer = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        component={Link}
        to={ROUTES.LANDING}
        label={props.user ? "Profile" : "Login"}
        icon={<AccountCircleIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to={ROUTES.TIMER}
        label="Timer"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to={ROUTES.MEDITATION_SESSIONS}
        label="Sessions"
        icon={<AssessmentIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to={ROUTES.RESOURCES}
        label="Resources"
        icon={<LibraryBooksIcon />}
      />
      {props.user &&
        <BottomNavigationAction
          component={Link}
          to={ROUTES.LANDING}
          onClick={props.firebase.doSignOut}
          label="Sign Out"
          icon={<ExitToAppIcon />}
        />
      }
    </BottomNavigation>
  );
}

export default withFirebase(Footer);
