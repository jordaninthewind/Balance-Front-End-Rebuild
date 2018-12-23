import React from 'react';
import './ResourceTile.css';

const ResourceTile = ({ image, link, title }) => {
  return (
    <div className='resourceTile'>
      <img src={image} alt="" />
      <p><a href={link}>{title}</a></p>
    </div>
  );
};

export default ResourceTile;
