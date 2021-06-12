import { PropTypes } from "prop-types";

export const UsernameShape = PropTypes.shape({ username: PropTypes.string });
export const PatreonShape = UsernameShape;
export const RedditShape = UsernameShape;
export const TwitterShape = UsernameShape;
export const YouTubeShape = PropTypes.shape({ channelName: PropTypes.string });
export const DiscordShape = PropTypes.shape({ inviteCode: PropTypes.string });
export const TwitchShape = UsernameShape;
export const PersonalShape = PropTypes.shape({
  rssFeed: PropTypes.string,
  url: PropTypes.string,
});

export const SocialShape = PropTypes.shape({
  patreon: PatreonShape,
  reddit: RedditShape,
  twitter: TwitterShape,
  youtube: YouTubeShape,
  discord: DiscordShape,
  twitch: TwitchShape,
  personal: PersonalShape,
});

export const GoblinShape = PropTypes.shape({
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  social: SocialShape,
});
