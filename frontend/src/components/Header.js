import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { useHistory, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  leftIcon: {
    marginRight: theme.spacing(2),
    cursor: "pointer",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  noDecorate: {
    textDecoration: "none",
    color: "inherit",
    marginRight: theme.spacing(3),
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const navigate = useCallback((path) => history.push("/"), [history]);

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <MenuBookIcon
            className={classes.leftIcon}
            onClick={() => navigate("/")}
          />
          <Typography className={classes.title} variant="h6" noWrap>
            <Link
              to="/"
              className={classes.noDecorate}
              color="inherit"
              underline="none"
            >
              The Goblin Archives
            </Link>
          </Typography>
          <div className={classes.grow} />
          <Typography>
            <Link
              to="/news"
              className={classes.noDecorate}
              color="inherit"
              underline="none"
            >
              News
            </Link>
          </Typography>
          <Typography>
            <Link
              to="/news"
              className={classes.noDecorate}
              color="inherit"
              underline="none"
            >
              Resources
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
