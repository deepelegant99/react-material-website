import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footerStyle: {
    backgroundColor:"blue",
    color:"white",
    position: "absolute",
    bottom:"0px", 
  },
});

const Footer = ()=>{
    const classes = useStyles();
    
    return(<h1 className={classes.footerStyle}>This is a footer</h1>)
}

export default Footer;