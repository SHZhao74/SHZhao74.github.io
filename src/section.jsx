import React from 'react';
export default class Section extends React.Component {
    render() {
        const sectionStyle = Object.assign({
            position:'relative',
            width: '100%',
            minWidth: '400px',
            minHeight: '100vh',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            // padding: '50px 30px',
        }, this.props.style)
        return (
            <section style={sectionStyle} className={this.props.className}>
                {/* <Grid
          container
          item
          xs={12}
          direction="row"
          justify="center"
          alignItems="center"
          // style={}
        > */}
                {this.props.children}
                {/* </Grid> */}
            </section>
        );
    }
}