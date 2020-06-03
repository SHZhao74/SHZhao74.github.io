import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

import DoneIcon from '@material-ui/icons/CheckCircleOutline'

import Section from "./section";
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
    },
    chips: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',

        '& > *': {
            margin: theme.spacing(0.5),
            backgroundColor: 'rgba(255,255,255,.8)'
            // color: 'white',
        }
    }
}));

const Chips = ({ data, className}) => <div className={className}>{data.map((d, i) => <Chip variant="outlined" color="secondary" label={d} deleteIcon={<DoneIcon />} onDelete={() => { }} />)}</div>

const Cover = () => {
    const classes = useStyles();
    return (
        <Section>
            <div
                style={{
                    background: "rgba(0,0,0,.3)",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    zIndex: "-99",
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
                            border: "rgba(255,255,255,0.8) solid 2px",
                            borderRadius: "50%",
                            padding: "7px",
                            textAlign: "center",
                        }}
                    >
                        <Avatar
                            alt="zsh"
                            src={Avatar_IMG}
                            className={classes.large}
                            style={{
                                border: "rgba(255,255,255,0.85) solid 1px",
                            }}
                        />
                    </div>
                </div>
                <h1 className="name" style={{}}>
                    Zhao Shou Hao
          </h1>
                <Chips className={classes.chips} data={[
                    'Programmer',
                    'Full Stack',
                    'Enthusiastic',
                    'Studious',
                    'Workaholic',
                    'Easy-Going',

                ]} />
                <h1 className="description">1992 / Taiwan / Male</h1>
            </Grid>
        </Section>)
}


export default Cover;