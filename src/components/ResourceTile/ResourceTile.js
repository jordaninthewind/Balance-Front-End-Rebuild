import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./ResourceTile.scss";

const ResourceTile = ({ image, link, title }) => {
  return (
    <Card>
      <CardImg src={image} alt="" top />
      <CardTitle>
        <a href={link}>{title}</a>
      </CardTitle>
    </Card>
  );
};

ResourceTile.defaultProps = {
  image:  'shambhala sun.png'
}

export default ResourceTile;