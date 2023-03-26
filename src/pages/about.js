import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { styled } from '@mui/system';
import { RentaflopText, RentaflopLink } from '../components/utils';
import Page from '../components/page'


export default function About() {
  const title = <Typography component="h1" variant="h4" align="center" fontWeight="600" gutterBottom>About Us</Typography>
  const body = (
    <>
      <Typography align="left" paragraph paddingTop="24px">
	Rentaflop helps cryptocurrency owners recover their forgetten wallet passwords faster and cheaper.
	Do you have a crypto wallet worth thousands, but you can't remember the password? Being locked out is frustrating.
	Rentaflop utilizes powerful graphics cards from its 3D animation rendering business to get you your crypto back.
      </Typography>
      <Typography align="left" paragraph>
	We're able to recover your password faster and charge less than other recovery services because we utilize affordable hardware
	from our core render farm business when it's otherwise idle. We take just 15% of the crypto we recover for you, and charge nothing
	until you get your crypto back.
      </Typography>
      <Typography align="left" paragraph>
	<RentaflopLink href="/contact">Contact us</RentaflopLink>, and we'll help you
	recover your money.
      </Typography>
    </>
  );
  
  return (
    <Page>
      <RentaflopText title={title} body={body} />
    </Page>
  );
}
