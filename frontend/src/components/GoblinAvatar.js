import React, { Component } from "react";
import { GoblinShape } from "../models";
import StyledBadge from "./StyledBadge";
import { Avatar } from "@material-ui/core";

class GoblinAvatar extends Component {
  render() {
    const { goblin } = this.props;

    let url;
    if (goblin.social.youtube && goblin.social.youtube.channelName) {
      url = `https://unavatar.now.sh/youtube/${goblin.social.youtube.channelName}`;
    } else if (goblin.social.twitter && goblin.social.twitter.username) {
      url = `https://unavatar.now.sh/twitter/${goblin.social.twitter.username}`;
    } else if (goblin.social.reddit && goblin.social.reddit.username) {
      url = `https://unavatar.now.sh/reddit/${goblin.social.reddit.username}`;
    }

    const label = `${goblin.name} Avatar`;
    const altText = goblin.name;
    let avatar;
    if (url) {
      avatar = <Avatar aria-label={label} src={url} alt={altText} />;
    } else {
      const letter =
        goblin.name.length > 0 ? goblin.name[0].toUpperCase() : "?";
      avatar = (
        <Avatar aria-label={label} alt={altText}>
          {letter}
        </Avatar>
      );
    }
    return (
      <StyledBadge
        title="Live Now"
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        variant="dot"
      >
        {avatar}
      </StyledBadge>
    );
  }
}

GoblinAvatar.propTypes = {
  goblin: GoblinShape,
};

export default GoblinAvatar;
