import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, ListItemText, ListItem, List, ListItemAvatar, Avatar } from "@material-ui/core";

import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';

import Section from './section';
import WorldMap from './img/worldmap.jpg'
import NTU from './img/ntu.png';
import NTNU from './img/ntnu.jpg';
import CHT from './img/cht.png';
import IBM from './img/IBM.png';
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));
function ListItemGenerator(data) {
    return data.map(d => <ListItem>
        <ListItemAvatar>
            <Avatar>{d.avatar}</Avatar>
        </ListItemAvatar>
        <ListItemText>{d.text}</ListItemText>
    </ListItem>)
}
function ListGenerator(data) {
    return data.map(d => <Grid item md={4} xs={12}>
        <Paper>
            <List>
                <ListItem alignItems="center">
                    <div style={{display: 'flex', justifyContent:'center', width:'100%'}}>
                    {d.icon}
                    </div>
                </ListItem>
                {ListItemGenerator(d.items)}
            </List>
        </Paper>
    </Grid>)
}
const data = [
    {
        icon: <SchoolRoundedIcon />,
        items: [{ avatar: <Avatar src={NTU} />, text: '2014-2016 National Taiwan University CSIE Master' },
            { avatar: <Avatar src={NTNU} />, text: '2010-2014 National Taiwan Normal University CSIE BA' },]
    },
    {
        icon: <WorkRoundedIcon />,
        items: [{ avatar: <Avatar src={CHT} />, text: '2016-2020 Chung-Hwa Telecom Engineer/Project Manager/MIS' },
            { avatar: <Avatar src={IBM} style={{ backgroundColor: 'white' }} />, text: '2014-2014 IBM Intern Engineer' },]
    },
    {
        icon: <MenuBookRoundedIcon />,
        items: [
            { avatar: <DescriptionRoundedIcon/>, text: '2016 Master Thesis - Distributed Workload Dispatching Algorithms for Mobile CloudComputing' },
            { avatar: <DescriptionRoundedIcon />, text: '2014 Taiwan Computer Game Association (TCGA) conference thesis - 大老二的人工智慧研究及實作' },
        ]
    },


]
export default function Experience() {
    const classes = useStyles();
    return (
        <Section style={{
            height: 'auto',
            minHeight:'100vh',
            backgroundImage: `url(${WorldMap})`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            padding: '28px 16px'
        }}>
            <Grid container item xs={12} spacing={2}>
                {ListGenerator(data)}
            </Grid>
        </Section>
    )
}