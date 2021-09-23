import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Home = () => {

  return (
    <Grid container>
      <Grid item xs={12}>
        <Nav />
      </Grid>
      <Grid item>Body</Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Home;
