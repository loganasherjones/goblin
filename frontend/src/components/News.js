import React from "react";
import Header from "./Header";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

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
  cardMedia: { paddingTop: "56.25%" },
  cardContent: { flexGrow: 1 },
  section: { paddingTop: theme.spacing(2) },
}));

function News(props) {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="md">
        <Typography
          component="h3"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Wow Gold Making News
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Here is the latest and greatest news from our{" "}
          <Link to="/goblins">Goblin Gurus</Link>
        </Typography>
      </Container>
      <Container maxWidth="md" className={classes.section}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item sm={6}>
            <Typography variant="h5">U.S. Token Price</Typography>
            <Typography paragraph>180,000 g</Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="h5" align="right">
              E.U. Token Price
            </Typography>
            <Typography paragraph align="right">
              220,000 g
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Title
                  </Typography>
                  <Typography>
                    This is where some description would go. It would take you
                    to the appropriate blog post, or video
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default News;
