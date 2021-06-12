import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActions,
  CardHeader,
  Chip,
  withStyles,
} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import GoblinAvatar from "./GoblinAvatar";
import SocialLinks from "./SocialLinks";
import { GoblinShape } from "../models";

const styles = (theme) => ({
  tag: { marginRight: theme.spacing(1) },
  description: { paddingTop: theme.spacing(1) },
});

class GoblinCard extends React.Component {
  render() {
    const { goblin, classes } = this.props;
    const avatar = <GoblinAvatar goblin={goblin} />;
    return (
      <Card>
        <CardHeader avatar={avatar} title={goblin.name} subheader="Add Date" />
        <CardContent>
          {goblin.tags.map((tag, index) => (
            <Chip key={index} className={classes.tag} label={tag} />
          ))}
          <Typography
            className={classes.description}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            TODO: Add a description
          </Typography>
        </CardContent>
        <CardActions>
          <SocialLinks social={goblin.social} />
        </CardActions>
      </Card>
    );
  }
}

GoblinCard.propTypes = {
  goblin: GoblinShape.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GoblinCard);
