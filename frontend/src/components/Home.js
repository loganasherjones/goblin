import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import Header from "./Header";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    flexDirection: "column",
  },
  heroButtons: { marginTop: theme.spacing(4) },
  content: { flex: "1 0 auto" },
  card: { display: "flex", flexDirection: "column", height: "100%" },
  section: { marginTop: theme.spacing(5) },
  resourceButton: { width: "100%", marginLeft: "auto" },
}));

function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            The Goblin Archives
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            If you want to make millions of Gold in World of Warcraft, you've
            come to the right place. Here at The Goblin Archives, we take the
            best content from across the internet and make it available for you.
            Ready to start making some gold?
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  to="search"
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
        <Container maxWidth="md" className={classes.section}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    News
                  </Typography>
                  <Typography>
                    See the latest news, videos, podcasts and more from the
                    community
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    component={RouterLink}
                    to="/news"
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Beginners Guide
                  </Typography>
                  <Typography>
                    This page is for people brand new to Gold Making and will
                    take you through the basics
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    component={RouterLink}
                    to="/beginners"
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Goblin Gurus
                  </Typography>
                  <Typography>
                    Check out some of our featured Goblin Gurus. They provide
                    the content!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    component={RouterLink}
                    to="/goblins"
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="md" className={classes.section}>
          <Grid container alignItems="center" justify="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h5" component="h2" gutterBottom>
                Gold Making Resources
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                component="p"
              >
                We collect lots of different data about gold making here. You
                can use this area to explore all of the various resources we've
                gathered. From YouTube to Twitch to Podcasts to Blog posts, you
                can find it all here.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                variant="contained"
                className={classes.resourceButton}
                component={RouterLink}
                to="/resources"
              >
                Explore
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Home;
