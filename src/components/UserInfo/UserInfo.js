import React from "react";
import Button from "@material-ui/core/Button";
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

const UserInfo = ({ user, timeMeditated, photoUrl, displayUpdateUser }) => {
  const classes = useStyles();
  const minutes = Math.floor(timeMeditated / 60);
  const totalMinutes = minutes % 60;
  const hours = Math.floor(minutes / 60);
  const seconds = timeMeditated % 60;

  return (
    <div className={classes.root}>
      <div className="title">User Name: {user.fullName}</div>
      <div className="subtitle">User E-mail: {user.email}</div>
      <div className="subtitle">
        Total Time:
        {" " + hours}:{totalMinutes < 10 ? "0" + totalMinutes : totalMinutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </div>
      <div className="subtitle">Location: {user.location}</div>
      <img className={classes.image} alt="profile" src={photoUrl} />
      <br/>
      <Button
          onClick={displayUpdateUser}
          variant="contained"
          color="secondary"
        >
          Update Profile
        </Button>
    </div>
  );
};

UserInfo.defaultProps = {
  photoUrl: "shambhala sun.png",
};

export default UserInfo;
