import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    //GridList, GridListTile, GridListTileBar,
    Paper, Typography, Link, Chip
    // Avatar, IconButton
} from "@material-ui/core";
// import LinkIcon from '@material-ui/icons/Link';
import PhoneIphoneRoundedIcon from '@material-ui/icons/PhoneIphoneRounded';
import DesktopWindowsRoundedIcon from '@material-ui/icons/DesktopWindowsRounded';

import Section from './section';

import tmp from './img/avatar.jpeg';
import Intro from './img/intro.png';
import ShareMoto from './img/share.png';
import CBW from './img/cbw.png';
import Tronzo from './img/tronzo.png';
import Github from './img/github.png';
import GAYA from './img/gaya.png';
import Lottery from './img/lottery.png';

import './portfolio.css';

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
    icon: {
        color: 'rgba(255, 255, 255, 0.84)',
    },
    skilltree: {
        backgroundColor: 'white'
    },
    chips: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5)
        }
    }
}));
const Chips = ({ data, className }) => (<div className={className}>
    {!!data && data.map((d, i) => <Chip
        key={`chip-${d}-${i}`}
        variant='outlined' color='primary' label={d} />)}
</div>)
function ListGenerator(data) {
    const classes = useStyles()
    return data.map((d, i) =>
        <Grid
            key={`work${i}`} container xs={12} sm={6} md={4} justify="center">
            <div className='work-root'>
                <Link href={d.url} target="_blank" rel="noopener" color="#444" >
                    <Paper elevation={3} className="work">
                        <img src={d.img} alt={d.name} />
                    </Paper>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3px' }}>
                        {d.phone ? <PhoneIphoneRoundedIcon style={{ color: '#444' }} /> : null}
                        {d.pc ? <DesktopWindowsRoundedIcon style={{ color: '#444' }} /> : null}
                    </div>
                    <Typography align="center" component="h5" className="work-title"> {d.title}</Typography>
                </Link>
                <Chips className={classes.chips} data={d.chips} />
            </div>
        </Grid>
    )
}
const NodeJS = 'NodeJS',
    ReactJS = 'ReactJS',
    MongoDB = 'MongoDB',
    ExpressJS = 'ExpressJS',
    Nginx = 'Nginx',
    Bootstraps = 'Bootstraps'
const data = [
    {
        img: Intro,
        title: 'Intro. Web',
        url: 'https://shzhao74.github.io',
        phone: true, pc: true,
        chips: [ReactJS, 'Material-UI'],
    },
    {
        img: Tronzo,
        title: 'Tronzo 創作',
        tool: 'A platform to help emerging writers share their literary works.',
        url: 'http://tronzo.zsh.nctu.me',
        cols: 2,
        phone: true, pc: true,
        chips: [NodeJS, MongoDB, ReactJS, ExpressJS, Nginx, 'GCP'],
    },
    {
        img: Lottery,
        title: 'Lottery website',
        tool: 'A cram school lottery web app.',
        url: 'http://lottery.zsh.nctu.me/lottery/wangyao',
        cols: 2,
        rows: 2,
        phone: true,
        chips: [NodeJS, ExpressJS, 'JQuery', MongoDB, 'Pug']
    },
    {
        img: GAYA,
        title: 'GAYA 尬押',
        tool: 'a side project about parsing and searching Rythme',
        url: 'http://gaya.zsh.nctu.me',
        pc: true,
        chips: [NodeJS, ExpressJS, 'Web Crawler', 'NLP', Bootstraps]
    },
    {
        img: ShareMoto,
        title: '共享機車',
        url: 'https://jessie-chang.github.io/web/',
        phone: false, pc: true,
        chips: ['Sass', 'JQuery']
    },
    {
        img: Github,
        title: 'Working Record Generator',
        tool: 'A open source repo to save my time, and make life be better',
        url: 'https://github.com/SHZhao74/WorkingRecordGenerator',
        pc: true,
        chips: [NodeJS]
    },
    {
        img: CBW,
        title: 'Custimized Bottle Water',
        // tool: 'reactjs, nodejs, mongodb',
        url: 'http://cbw.zsh.nctu.me/',
        phone: true, pc: true,
        chips: [NodeJS, ExpressJS, 'MVC', Bootstraps]
    },
    // {
    //     img: tmp,
    //     title: 'Stock Support/Pression Line',
    //     tool: 'reactjs, nodejs, mongodb'
    // },
];

export default function Experience() {
    // const classes = useStyles();
    return (
        <Section style={{
            // height: 'auto',
            padding: '20px 20px 80px 20px'
        }}>
            <Grid container item xs={12} spacing={2} justify="center">
                <Grid item xs={12}>
                    <Typography variant="h2" align="center" gutterBottom style={{ fontWeight: 'bolder' }}>Portfolio</Typography>
                </Grid>
                <Grid container spacing={4} xs={12}>
                    {/* <GridList cols={2} cellHeight={200}>
                        {ListGenerator(data)}
                    </GridList> */}
                    {ListGenerator(data)}
                </Grid>
            </Grid>
        </Section>
    )
}