import React from "react";
import AppBar from "@material-ui/core/AppBar"
import Typography from '@material-ui/core/Typography';
import "./Navigation.scss";

const Navigation = () => {
  return (
    <AppBar className="brand-header">
      <Typography className="navbar-brand">b a l a n c e</Typography>
    </AppBar>
  );
};

export default Navigation;
