import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import {CssBaseline} from '@material-ui/core';
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

// This is material UI libraries
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 1360
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
            </Typography>
            <Typography variant="h6" className={classes.title}>
           <Link to = "/"> Home</Link>      
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to ="/services">services</Link>      
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to ="/contact">contact</Link>      
          </Typography>


          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
