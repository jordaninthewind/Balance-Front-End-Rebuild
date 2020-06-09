import React, { PureComponent } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
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
            "https://thebuddhistcentre.com/sites/default/files/styles/gallery_full_size/public/users/157/groups/images/screen_shot_2018-11-06_at_17.08.27.png",
        },
        {
          name: "Github Frontend",
          link: "http://github.com/jordaninthewind/Balance-Front-End-Rebuild",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/120px-Octicons-mark-github.svg.png",
        },
        {
          name: "Github Backend",
          link: "http://github.com/jordaninthewind/balance-fis",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/120px-Octicons-mark-github.svg.png",
        },
        {
          name: "Personal Page",
          link: "https://www.jordan-kline.com",
          image: "jordan-kline.png",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Typography variant="h3">Relevant Links:</Typography>
        <Grid container spacing="1" direction="row">
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
        </Grid>
      </>
    );
  }
}

export default ResourcesContainer;
