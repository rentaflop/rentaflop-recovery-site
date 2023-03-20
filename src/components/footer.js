import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import { RentaflopLink } from "./utils";
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
  social_class: {
    height: "35px!important",
    width: "35px!important",
    marginRight: "5px",
    '&:hover': {
      height: "40px!important",
      width: "40px!important",
    },
  },
}));


function Copyright(props) {
  return (
    <>
      <Typography variant="body2" color="textSecondary" align="center" {...props}>
	{'Copyright © '}
	<RentaflopLink color="inherit" href ="/">
	  rentaflop
	</RentaflopLink>{' '}
	{new Date().getFullYear()}
      </Typography>
    </>
  );
}


const portal_url = "https://portal.rentaflop.com"
const footers = [
  {
    title: 'Company',
    description: ['Home', 'About', 'Contact'],
    route: ['/', '/about', '/contact'],
  },
  {
    title: 'Rendering',
    description: ['About', 'Rentaflop miner', 'FAQ', 'Support'],
    route: ["https://rentaflop.com", portal_url+'/blog/hosting', portal_url+'/faq', portal_url+'/support'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
    route: [portal_url+'/privacy', portal_url+'/terms'],
  },
];


export default function Footer() {
  const classes = useStyles();

  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
	borderTop: (theme) => `1px solid ${theme.palette.divider}`,
	mt: 8,
	py: [3, 6],
	textAlign: "center"
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
	{footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
	    </Typography>
            <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
              {footer.description.map((item, idx) => (
		<li key={item}>
		  <RentaflopLink href={footer.route[idx]} variant="subtitle1" color="textSecondary">
		    {item}
		  </RentaflopLink>
		</li>
              ))}
	    </ul>
          </Grid>
	))}
      </Grid>
      <Copyright sx={{ mt: 1 }} />
    </Container>
  );
}
