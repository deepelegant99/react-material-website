import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footerStyle: {
    position: "absolute",
    bottom:"0px", 
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Nav />
      </Grid>
      <Grid item>Body</Grid>
      <Grid item xs={12}>
        {/* <Footer /> */}
        <div className={classes.footerStyle}>
          <Nav />
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
