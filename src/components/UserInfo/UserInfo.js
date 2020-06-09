import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    textAlign: "center",
  },
  image: {
    minWidth: "200px",
    minHeight: "200px",
    width: "25vh",
    height: "25vh",
    clipPath: "circle(25vh at center)",
  },
}));

const UserInfo = ({ currentUser, photoUrl, displayUpdateUser }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <div className={classes.root}>
        <div className="title">{currentUser.email}</div>
        <img className={classes.image} alt="profile" src={photoUrl} />
        <br />
        {/* <Button
          variant="contained"
          color="secondary"
        >
          Update Profile
        </Button> */}
      </div>
    </Grid >
  );
};

UserInfo.defaultProps = {
  photoUrl: "shambhala sun.png",
};

export default UserInfo;
