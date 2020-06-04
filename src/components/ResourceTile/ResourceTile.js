import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
// import "./ResourceTile.scss";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ResourceTile = ({ image, link, title }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia image={image} alt="" />
        <CardContent>
          <a href={link}>{title}</a>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ResourceTile.defaultProps = {
  image: "shambhala sun.png",
};

export default ResourceTile;
