import React, { Component } from 'react';
import { Typography, Toolbar, AppBar, Box, Button } from '@material-ui/core';
import theme from './theme';
import Image from 'next/image'
import { withStyles } from '@material-ui/styles';
import Link from 'next/link'


// get theme colors
const textColor = theme.palette.text.light;
const primaryColor = theme.palette.primary.main; // #424242
const lightPrimaryColor = theme.palette.primary.light;
const gradient = theme.palette.gradient;
const gradient_hover = theme.palette.gradient_hover;
const styles = theme => ({
  button_style: {
    backgroundColor: "rgba(251, 251, 251, .2)!important",
    color: textColor + "!important",
    '&:hover': {
      backgroundColor: "rgba(251, 251, 251, .4)!important",
    },
    textTransform: 'none!important',
    borderRadius: "50px!important",
  },
  secondary_button_style: {
    color: textColor + "!important",
    '&:hover': {
      color: "rgba(251, 251, 251, .7)!important",
    },
    textTransform: 'none!important',
  },
  cta_button: {
    background: gradient,
    color: textColor + "!important",
    '&:hover': {
      background: gradient_hover,
    },
    borderRadius: "50px!important",
  }
})


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };


  render() {
    const { classes } = this.props;
    let is_large_screen = true;
    // client-side-only code, so must check if window defined first
    if (typeof window !== "undefined") {
      is_large_screen = window.innerWidth > 768;
    }
    
    return (
      <AppBar style={{ backgroundColor: primaryColor, borderBottom: '1px solid', borderColor: lightPrimaryColor }} position='static'>
        <Toolbar>
          <Box display='flex' flexGrow={1}>
            <a href='/' style={{ color: textColor, textDecoration: 'none', "textAlign": "left" }}>
	      <Image src="./static/rentaflop_logo.svg" height={20.18} width={63.63} alt="Rentaflop logo" />
              <Typography variant='inherit'>
                rentaflop
              </Typography>
            </a>
          </Box>
	  <Box marginRight='10px'>
	    <Button href="/about" className={classes.button_style} variant="outlined" linkcomponent={Link}>
	      About us
	    </Button>
	  </Box>
	  <Box marginRight='10px'>
	    <Button href="/contact" className={classes.cta_button} variant="outlined" linkcomponent={Link}>
	      Recover your funds
	    </Button>
	  </Box>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
