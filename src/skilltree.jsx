/**
 * use "treeflex" package to impelement it
 */
import React from 'react';
import { Grid, Avatar, Typography } from "@material-ui/core";

export default class SkillTree extends React.Component {
    constructor() {
        super()
    }
    renderChildren(data) {
        if (!data) return null;
        return (
            <ul>
            {data.map((d, i) => (
                <li key={`skill ${i}`}>
                    <span className="tf-nc">{d.title}</span>
                    {this.renderChildren(d.children)}
                </li>
            ))}
            </ul>
        )
    }
    render() {
        const { data } = this.props;
        return (<Grid container item xs={12}>
            {data.map((d, i)=> (<Grid item xs={12} key={`skill-root-${i}`}>
                <div className="tf-tree tf-gap-sm" style={{
                    fontSize: '10px',
                    display: 'flex',
                    justifyContent:'center'
                }}>
                    <ul>
                        <li>
                            <span className="tf-nc" style={{ fontSize:'1.1em', fontWeight:'bold'}}>{d.title}</span>
                            {/* <Typography variant="h5">{d.title}</Typography> */}
                            {/* <ul> */}
                                {this.renderChildren(d.children)}
                            {/* </ul> */}
                        </li>
                    </ul>
                </div>

            </Grid>))
            }
        </Grid>)
    }
}