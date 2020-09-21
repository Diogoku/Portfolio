import React, { useEffect } from "react";

// MATERIAL-UI
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

// CSS
import "../css/projectsSection.css";

function ProjectCard({ image, title, description, tools, link }) {
  useEffect(() => {
    Aos.init({ once: false });
  }, []);

  return (
    <Card className="projectCard" square>
      <div className="projectCard__imageWrapper">
        <CardMedia
          component="img"
          alt="Netflix Clone"
          height="180"
          image={image}
          title="Netflix Clone"
        />
      </div>
      <Divider />
      <CardContent className="projectCard__content">
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          color="textPrimary"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          {description}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          color="textPrimary"
        >
          Done with
        </Typography>
        {tools.map((tool, index) => (
          <Chip
            key={index}
            className="projectCard__tool"
            avatar={<Avatar alt="React" src={tool.img}></Avatar>}
            label={tool.name}
          />
        ))}
      </CardContent>
      <CardContent className="projectCard__contentResponsive">
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          color="textPrimary"
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className="projectCard__link"
          size="small"
          variant="outlined"
          color="primary"
          href={link}
          target="_blank"
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
