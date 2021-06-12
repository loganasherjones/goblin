import React from "react";
import Header from "./Header";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GoblinCard from "./GoblinCard";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContainer: { padding: theme.spacing(2) },
  cardMedia: { paddingTop: "56.25%" },
  cardContent: { flexGrow: 1 },
  section: { paddingTop: theme.spacing(2) },
}));

function Goblins() {
  const classes = useStyles();
  const goblins = [
    {
      name: "BilisOnyxia",
      tags: ["Flipping", "Multiple Servers", "Retail"],
      social: {
        patreon: { username: "BilisOnyxia" },
        twitter: { username: "BilisOnyxia" },
        reddit: null,
        youtube: null,
        discord: null,
        twitch: null,
        personal: null,
      },
    },
  ];
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="md">
        <Typography
          component="h4"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Meet the Gurus
        </Typography>
        <Typography
          component="h5"
          variant="h5"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          These are the people hard at work producing content to help you make
          gold. Consider supporting them, by giving them a like, follow or
          patreon pledge
        </Typography>
      </Container>
      <Container maxWidth="md" className={classes.section}>
        <Grid container direction="row">
          {goblins.map((goblin, index) => (
            <Grid
              key={index}
              item
              sm={6}
              xs={12}
              className={classes.cardContainer}
            >
              <GoblinCard goblin={goblin} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Goblins;
