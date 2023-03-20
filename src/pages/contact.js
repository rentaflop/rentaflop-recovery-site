import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { styled } from '@mui/system';
import { RentaflopText, RentaflopLink } from '../components/utils';
import Page from '../components/page'


export default function Contact() {
  const title = <Typography component="h1" variant="h4" align="center" fontWeight="600" gutterBottom>Contact Us</Typography>
  const body = (
    <>
      <Typography align="left" paragraph paddingTop="24px">
	Email us at <RentaflopLink href="mailto:recovery@rentaflop.com">recovery@rentaflop.com</RentaflopLink>, and we'll help you
	recover your money.
      </Typography>
      <Typography align="left" paragraph>
	Please include the following information:
      </Typography>
      <Typography align="left">
	1. What type of coin is in the wallet? (BTC, ETH, DOGE, etc.)
      </Typography>
      <Typography align="left">
	2. What type of wallet is this? (Bitcoin Core, Blockchain.com, Electrum, etc.)
      </Typography>
      <Typography align="left">
	3. How many coins are in the wallet?
      </Typography>
      <Typography align="left">
	4. As much information about the password as you can recall. This could be potential or partial passwords, details about the password, etc.
      </Typography>
      <Typography align="left" paragraph>
	5. Attach the wallet itself (often a wallet.dat file). Note that in some cases you can use a program such
	as <RentaflopLink href="https://github.com/openwall/john/blob/bleeding-jumbo/run/bitcoin2john.py">this one</RentaflopLink> to extract the hash
	and share this with us instead of the full wallet for added security.
      </Typography>
      <Typography align="left" paragraph>
	If you have a very large wallet and/or are concerned about security over email, please omit any sensitive information in your email, and we'll
	talk via a more secure method.
      </Typography>
    </>
  );
  
  return (
    <Page>
      <RentaflopText title={title} body={body} />
    </Page>
  );
}
