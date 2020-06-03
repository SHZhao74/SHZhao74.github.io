import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, Typography
    //GridList, GridListTile, GridListTileBar,
    // Paper, , Link, Chip
    // Avatar, IconButton
} from "@material-ui/core";

import Section from './section';

const About = () => <Section style={{
    // height: 'auto',
    padding: '20px 20px 80px 20px'
}}>
    <Grid container item xs={12} spacing={2} justify="center">
        <Grid item xs={12}>
            <Typography variant="h2" align="center" gutterBottom style={{ fontWeight: 'bolder' }}>About Me</Typography>
        </Grid>
        <Grid spacing={4} xs={12} justify="center">
            <Typography variant='h6'> 打從高中電腦課接觸C語言開始，便決定這輩子就是生來寫程式的 </Typography>
        </Grid>
        <Grid spacing={4} xs={12} justify="center">
            <Typography variant='h6'> 興趣太多，時間太少 </Typography>
        </Grid>
    </Grid>
</Section>

export default About;
