import React, { PureComponent } from "react";
import ResourceTile from "../components/ResourceTile/ResourceTile";

class ResourcesContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      resources: [
        {
          name: "Lion's Roar",
          link: "http://www.lionsroar.com",
          image:
            "https://thebuddhistcentre.com/sites/default/files/styles/gallery_full_size/public/users/157/groups/images/screen_shot_2018-11-06_at_17.08.27.png"
        },
        {
          name: "Github Frontend",
          link: "http://github.com/jordaninthewind/Balance-Front-End-Rebuild",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/120px-Octicons-mark-github.svg.png"
        },
        {
          name: "Github Backend",
          link: "http://github.com/jordaninthewind/balance-fis",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/120px-Octicons-mark-github.svg.png"
        },
        { name: "Personal Page", link: "https://jordan-kline.com", image: "jordan-kline.png" }
      ]
    };
  }

  render() {
    return (
      <>
        <h1>Relevant Links:</h1>
        <div className="component">
          {this.state.resources.map((res, idx) => {
            return (
              <ResourceTile
                key={idx}
                image={res.image}
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
