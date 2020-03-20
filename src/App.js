import React from "react";
import "./App.css";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

import Section from "./section";
import Experience from "./experience";
import Skill from './skill';
import Portfolio from './portfolio';
import Footer from './footer';
import Avatar_IMG from "./img/avatar.jpeg";
import OceanMP4 from "./img/ocean.mp4";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30)
  }
}));


function App() {
  const classes = useStyles();
  return (
    <>
      <Section>
        <div
          style={{
            background: "rgba(0,0,0,.3)",
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: "-99"
          }}
        ></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          id="myVideo"
          style={{ zIndex: "-100" }}
        >
          <source src={OceanMP4} type="video/mp4" />
        </video>
        <Grid item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                display: "inline-block",
                border: "rgba(255,255,255,0.7) solid 4px",
                borderRadius: "50%",
                padding: "7px",
                textAlign: "center"
              }}
            >
              <Avatar
                alt="zsh"
                src={Avatar_IMG}
                className={classes.large}
                style={{
                  border: "rgba(255,255,255,0.7) solid 2px"
                }}
              />
            </div>
          </div>
          <h1 className="name" style={{}}>
            Zhao Shou Hao
          </h1>
          <h1 className="description">1992 / Taiwan / Male</h1>
        </Grid>
      </Section>
      <Skill />
      <Experience />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
