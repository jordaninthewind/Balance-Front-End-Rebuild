import React, { PureComponent } from 'react';
import ResourceTile from '../components/ResourceTile/ResourceTile';

class ResourcesContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      resources: [
        { name: "Lion's Roar", link: 'http://www.lionsroar.com' },
        {
          name: 'Github Frontend',
          link: 'http://github.com/jordaninthewind/Balance-Front-End-Rebuild'
        },
        {
          name: 'Github Backend',
          link: 'http://github.com/jordaninthewind/balance-fis'
        },
        { name: 'Personal Page', link: 'http://www.jordan-kline.com' }
      ]
    };
  }

  render() {
    return (
      <>
        <div className="title">Links:</div>
        <div className="component">
        {this.state.resources.map((res, idx) => {
          return (
            <ResourceTile
              key={idx}
              image={'../../public/shambhala sun.png'}
              title={res.name}
              link={res.link}
            />
          );
        })}
        </div>
      </>
    );
  }
}

export default ResourcesContainer;
