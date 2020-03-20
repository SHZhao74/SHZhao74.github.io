import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import SkillTree from './skilltree';

import Section from './section';

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
    skilltree: {
        backgroundColor: 'white'
    }
}));
const data = [
    {
        title: 'Web Front-End',
        status: 'get',
        // name:'HTML',
        children: [
            {
                title: 'HTML',
                children: [{
                    title: 'Pug'
                }],
            },
            {
                title: 'CSS',
                children: [{
                    title: 'SASS/SCSS'
                }, {
                    title: 'Bootstraps'
                }],
            },
            {
                title: 'JAVASCRIPT',
                children: [
                    {
                        title: 'Reactjs',
                        children: [
                            { title: 'Redux' },
                            { title: 'Mobx' },
                            { title: 'Route' },
                        ]
                    }, {
                        title: 'jquery'
                    }, {
                        title: 'Webpack'
                    }],
            },
        ],
    },
    {
        title: 'Web Back-End',
        children: [{
            title: 'Nodejs',
            children: [
                {
                    title: 'Express'
                }
            ]
        }, {
            title: 'Python',
            children: [
                {
                    title: 'Flask'
                }
            ]
        },
        {
            title: 'DB',
            children: [
                { title: 'MongoDB' },
                { title: 'MySQL' },
            ]
        },
        {
            title: 'DevOps',
            children: [
                { title: 'Nginx' },
                {
                    title: 'PaaS',
                    children: [
                        { title: 'GCP' }
                    ]
                },
                {
                    title: 'Virtual Machine',
                    children: [
                        { title: 'Docker' }, { title: 'ESXi' }]
                },
                {
                    title: 'CI/CD', children: [
                        { title: 'Jenkins' }
                    ]
                }
            ]
        }]
    },
    {
        title: 'Others',
        children: [
            {
                title: 'Keras'
            },
            { title: 'OpenCV' },
            {
                title: 'Project Management'
            }
        ]
    }
];
const skill_rough_data = [
    { name: 'Nodejs ', percent: 75 },
    { name: 'Reactjs ', percent: 70 },
    { name: 'MongoDB ', percent: 66 },
    { name: 'PM', percent: 50 },
    { name: 'AI', percent: 45 },
]
const SkillCell = ({ name, percent }) => <Grid item xs={12} sm={4} md={3}>
    <div className='skill-cell' data-name={name} data-percent={percent + '%'}>
        <svg viewBox="0 0 36 36" class="">
            <path class="circle-bg"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path class="circle"
                stroke-dasharray={`${percent}, 100`}
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
        </svg>
    </div>
</Grid>
export default function Experience() {
    const classes = useStyles();
    return (
        <Section className="skill-section" style={{
            minHeight: '100vh',
        }}>
            <Grid className="skill-container" container item xs={12} spacing={0} style={{
                
            }}>
                <div style={{ background: 'white', width: '100%', height: '100%', padding: '20px 20px 80px 20px' }}>
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" gutterBottom style={{ fontWeight: 'bold', marginBottom: '0px' }}>Skill Tree</Typography>
                        <Typography variant="h5" align="center" gutterBottom style={{ fontWeight: '200', marginBottom: '40px' }} className="subtitle">Life is the toughest RPG</Typography>
                    </Grid>

                    <Grid container item xs={12} justify="space-around" spacing={0}>
                        {/* <SkillTree data={data} /> */}
                        {skill_rough_data.map(s => <SkillCell {...s} />)}
                    </Grid>
                </div>
            </Grid>
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="mygradient" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1" gradientTransform="rotate(75)">
                        <stop offset="0%" stop-color="#f44336"></stop>
                        {/* <stop offset="%" stop-color="#f44336s"></stop> */}
                        {/* <stop stop-color="#063C80"></stop> */}
                        {/* <stop stop-color="#B3CEF1"></stop> */}
                        <stop offset="75%" stop-color="#2196f3"></stop>
                        <stop offset="100%" stop-color="#2196f3"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </Section>
    )
}