import React, { Component } from "react";
import { SocialShape } from "../models";
import { IconButton, Link } from "@material-ui/core";
import { faPatreon } from "@fortawesome/free-brands-svg-icons/faPatreon";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faReddit } from "@fortawesome/free-brands-svg-icons/faReddit";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SocialLinks extends Component {
  render() {
    const { social } = this.props;
    const icons = [];

    if (social.patreon && social.patreon.username) {
      const username = social.patreon.username;
      icons.push({
        link: `https://www.patreon.com/${username}/posts`,
        icon: faPatreon,
        color: "#F6424D",
      });
    }

    if (social.twitter && social.twitter.username) {
      const username = social.twitter.username;
      icons.push({
        link: `https://twitter.com/${username}`,
        icon: faTwitter,
        color: "#37A1F2",
      });
    }

    if (social.reddit && social.reddit.username) {
      const username = social.reddit.username;
      icons.push({
        link: `https://reddit.com/user/${username}/`,
        icon: faReddit,
        color: "#F64504",
      });
    }

    if (social.youtube && social.youtube.channelName) {
      const channelName = social.youtube.channelName;
      icons.push({
        link: `https://youtube.com/channel/${channelName}`,
        icon: faYoutube,
        color: "#F50602",
      });
    }

    if (social.discord && social.discord.inviteCode) {
      // TODO: This isn't quite right. Shouldn't be username
      const code = social.discord.inviteCode;
      icons.push({
        link: `https://discord.gg/${code}`,
        icon: faDiscord,
        color: "#7289DA",
      });
    }

    if (social.twitch && social.twitch.username) {
      const username = social.twitch.username;
      icons.push({
        link: `https://twitch.tv/${username}`,
        icon: faTwitch,
        color: "#9147FF",
      });
    }

    if (social.personal) {
      icons.push({
        link: social.personal,
        icon: faExternalLinkAlt,
        color: "#ADB5BE",
      });
    }

    return (
      <React.Fragment>
        {icons.map((icon, index) => (
          <IconButton
            key={index}
            component={Link}
            href={icon.link}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={icon.icon} color={icon.color} />
          </IconButton>
        ))}
      </React.Fragment>
    );
  }
}

SocialLinks.propTypes = {
  social: SocialShape,
};

export default SocialLinks;
