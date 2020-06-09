import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// import "./ResourceTile.scss";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 120,
    width: 120
  },
});

const ResourceTile = ({ image, link, title }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <a href={link} target="_blank" noopener noreferral style={{textDecoration: 'none'}}>
        <CardActionArea>
          <CardMedia image={image} className={classes.media} alt="" />
          <CardContent>
            <Typography variant="h5" color="primary">{title}</Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
};

ResourceTile.defaultProps = {
  image: "shambhala sun.png",
};

export default ResourceTile;
