import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, CssBaseline, Grid, Stack, Container, Paper,
	 TableCell, TableRow } from '@material-ui/core';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Graphic from '../../public/static/rocket_graphic.svg';
import GraphicMobile from '../../public/static/rocket_graphic_mobile.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { RentaflopText, RentaflopTable, RentaflopButton, RentaflopLink } from '../components/utils';
import theme from '../components/theme';
import TextField from '@mui/material/TextField';
import Page from '../components/page'
import Image from 'next/image'
import Link from 'next/link'
import { styled } from "@mui/material/styles";
import BoltIcon from '@mui/icons-material/Bolt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SecurityIcon from '@mui/icons-material/Security';
import MailIcon from '@mui/icons-material/Mail';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { yellow } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import { orange } from '@mui/material/colors';


const CardContentNoPadding = styled(CardContent)(`
  &:last-child {
    padding-bottom: 0;
  }
`);

function make_graphic_styles(is_large_screen) {
  const url = is_large_screen ? `url(${Graphic.src})` : `url(${GraphicMobile.src})`
  const height = is_large_screen ? "110vh" : "90vh"
  const styles = {
    paperContainer: {
      backgroundImage: url,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "100%",
      height: height,
      borderRadius: 0,
      boxShadow: "none",
      backgroundColor: "rgb(251,251,251)"
    }
  };

  return styles;
}

const intro_cards = [
  {
    "id": 0,
    "primary":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      Blazing fast crypto recovery speed
    </Typography>,
    "secondary":
    <Typography>
      Get your wallet back fast. Our many GPU machines across the globe recover your password much faster than alternative recovery services.
    </Typography>,
    "icon":
    <BoltIcon style={{ color: yellow[300], fontSize: 50 }} />
  },
  {
    "id": 1,
    "primary":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      Guaranteed success or it's free
    </Typography>,
    "secondary":
    <Typography>
      If we recover your crypto, we only take a 15% cut. We can often help, but if we can't get you your money back, it costs you nothing.
    </Typography>,
    "icon":
    <AttachMoneyIcon style={{ color: green[800], fontSize: 50 }} />
  },
  {
    "id": 2,
    "primary":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      Trusted password recovery
    </Typography>,
    "secondary":
    <Typography>
      You can trust us because we're a reputable US company offering more than just password recovery.
      Our core business is actually <RentaflopLink href="https://rentaflop.com">rendering</RentaflopLink>.
    </Typography>,
    "icon":
    <SecurityIcon style={{ color: blue[800], fontSize: 50 }} />
  },
];
      
const business_cards = [
  {
    "id": 0,
    "img": <Image src={"./static/epilog_logo.svg"} alt={"Epilog laser is a happy rentaflop customer"} width={250} height={100} />,
    "url": "https://www.epiloglaser.com/?ref=rentaflop",
  },
  {
    "id": 1,
    "img": <Image src={"./static/cgc_logo.svg"} alt={"Rentaflop partners with CG Cookie"} width={250} height={100} />,
    "url": "https://www.cgcookie.com/?ref=rentaflop",
  },
];

const social_cards = [
  {
    "id": 0,
    "author":
    <Typography gutterBottom variant="h6" component="h2">
      <span style={{ fontWeight: "bold" }} >Bryan Weathers</span> - 3D Artist with Epilog Laser
    </Typography>,
    "quote":
    <Typography align="left" gutterBottom>
      "I'm impressed with how well your service has handled some of the larger renders we've sent your way; some of the Epilog Blender files are quite
      bulky and have really high memory usage that nearly bring my personal computer to a crawl, especially with some at 6k resolution, but you've handled
      it wonderfully."
    </Typography>,
  },
];

const tutorial_cards = [
  {
    "id": 0,
    "step":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      Step 1
    </Typography>,
    "instruction":
    <Typography gutterBottom>
      <RentaflopLink href="/contact">Contact us</RentaflopLink>, and we'll schedule a consultation.
    </Typography>,
    "icon":
    <MailIcon style={{ color: blue[300], fontSize: 50 }} />
  },
  {
    "id": 1,
    "step":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      Step 2
    </Typography>,
    "instruction":
    <Typography gutterBottom>
      We evaluate your case and sign our service agreement.
    </Typography>,
    "icon":
    <VolunteerActivismIcon style={{ color: green[300], fontSize: 50 }} />
  },
  {
    "id": 2,
    "step":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      Step 3
    </Typography>,
    "instruction":
    <Typography gutterBottom>
      We conduct the recovery and get you your crypto back!
    </Typography>,
    "icon":
    <CurrencyBitcoinIcon style={{ color: orange[300], fontSize: 50 }} />
  },
];


export default function Home() {
  const is_large_screen = useMediaQuery('(min-width:600px)');
  const params_large = {
    "primary": "h1",
    "secondary": "h4"
  }
  const params_small = {
    "primary": "h3",
    "secondary": "h6"
  }
  const params = is_large_screen ? params_large : params_small;
  const intro_title = <Typography component="h1" variant="h4" align="left" fontWeight="600" gutterBottom>Meet rentaflop</Typography>
  const intro_body = <Typography align="left" paragraph paddingTop="24px" />
  let autofocus = true;
  // client-side-only code, so must check if window defined first
  if (typeof window !== "undefined") {
    // don't autofocus if they've clicked arrow since it brings screen back up on chrome
    autofocus = !window.location.href.includes("learn");
  }

  const table_title_text = <Typography component="h1" variant="h2" align="left" fontWeight="600" gutterBottom>How rentaflop compares</Typography>
  const table_title = <RentaflopText title={table_title_text} />
  const table_cols = ["Company", "Price", "Fast Rendering Starting Immediately", "Supports Both Cycles and Eevee", "Satisfaction or Money Back", "Data Privacy"];
  const rows = [
    {"id": 0, "company": "rentaflop", "price": "$0.0019 per OBh", "fast": "Yes", "engines": "Yes", "refund": "Yes", "privacy": "Yes"},
    {"id": 1, "company": "GarageFarm", "price": "$0.0050 per OBh, fast tier", "fast": "Yes", "engines": "No", "refund": "No", "privacy": "Yes"},
    {"id": 2, "company": "RebusFarm", "price": "$0.0045 per OBh", "fast": "Yes", "engines": "No", "refund": "Yes", "privacy": "Yes"},
    {"id": 3, "company": "Concierge Render", "price": "$0.0040 per OBh", "fast": "Yes", "engines": "Yes", "refund": "No", "privacy": "Yes"},
    {"id": 4, "company": "Blendergrid", "price": "Determined prior to render", "fast": "Yes", "engines": "No", "refund": "Yes", "privacy": "Yes"},
    {"id": 5, "company": "SheepIt", "price": "Spend points earned from providing computing power", "fast": "No", "engines": "Yes", "refund": "No", "privacy": "No"},
  ];
  const table_body = rows.map((row) => (
    <TableRow key={row.id} style={(row.company === "rentaflop" ? {background: "rgb(220, 233, 241, .5)"} : {})}> 
      <TableCell>{row.company}</TableCell>
      <TableCell>{row.price}</TableCell>
      <TableCell>{row.fast}</TableCell>
      <TableCell>{row.engines}</TableCell>
      <TableCell>{row.refund}</TableCell>
      <TableCell>{row.privacy}</TableCell>
    </TableRow>
  ));
  const table_footer = <Typography component="p" variant="p" align="right" color="rgb(128, 128, 128, .5)" sx={{pt: 2}}>Data from 10/05/22</Typography>
  const tutorial_title = <Typography component="h1" variant="h4" align="left" fontWeight="600" gutterBottom>How it works</Typography>
  const business_title = <Typography component="h1" variant="h4" align="left" fontWeight="600" gutterBottom>Trusted for business by</Typography>
  const social_title = <Typography component="h1" variant="h4" align="left" fontWeight="600" gutterBottom>What our customers say</Typography>
  const textColorDark = theme.palette.text.dark;
  
  return (
    <Page>
      <CssBaseline />
      <main>
	<Paper style={make_graphic_styles(is_large_screen)["paperContainer"]}>
          <Box
            sx={{
              pt: "7%", // 12
	      pl: "5%",
	      pr: "33%", // 40
	      float: "left",
	      width: "100%",
            }}
          >
	    {/* landing screen */}
            <Container maxWidth="xl">
              <Typography
		component="h1"
		variant={params.primary}
		align="left"
		color="textPrimary"
		gutterBottom
              >
		Fast and affordable crypto recovery
              </Typography>
              <Typography variant={params.secondary} align="left" color="textPrimary">
		Don't lose thousands just because you forgot a password.
              </Typography>
              <Typography variant={params.secondary} align="left" color="textPrimary">
		Recover your crypto wallet with rentaflop and get your money back in your hands.
              </Typography>
	      <RentaflopButton button_class="cta_button" dest={"/contact"} text="Start recovery" />
            </Container>
          </Box>
	  { is_large_screen &&
	  <Link href="/#learn" scroll={false}>
	    <ArrowDownwardIcon style={{ color: textColorDark, fontSize: 225, marginTop: "-35px" }} />
	  </Link>
	  }
	</Paper>
	
	{/* meet rentaflop, what it is */}
        <Container sx={{ pt: 4, pb: 4 }} maxWidth="md" id="learn">
	  <RentaflopText title={intro_title} body={intro_body}/>
             <Grid container spacing={2}>
               <Grid item xs={12} sm={6} md={4}>
		 <Card
                   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
		 >
                  <CardContent sx={{ flexGrow: 1 }}>
		    <Typography align="left" paragraph paddingTop="24px">
		      Rentaflop recovery helps crypto owners recover their forgotten wallet passwords.
		    </Typography>
		    <Typography align="left" paddingTop="12px">
		      SITE IN PROGRESS AND COMING SOON TO A GPU NEAR YOU
		    </Typography>
		    <RentaflopButton button_class="cta_button" dest={"/contact"} text="Contact us" />
                  </CardContent>
		 </Card>
               </Grid>
               <Grid item xs={12} sm={6} md={8}>
		 <Card
                   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
		 >
		   <CardMedia>
		     <div style={{ position: 'relative', width: 563, height: 324 }}>
		       <Image alt="Blender application home screen" src="./static/blender_application.png" fill
			      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
		     </div>
		   </CardMedia>
		 </Card>
               </Grid>
             </Grid>
	</Container>
		
	{/* supported software */}
        <Stack
          sx={{ pt: 3, pb: 3 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
	  {/* setting height twice because of a css conflict with app.css and index.css */}
	  <Image src="./static/maya_logo.svg" height={100} width={100} style={{ paddingTop: 8, display: "inline", verticalAlign: "baseline", height: 100,
									    }} alt="Maya logo" />
	  <Image src="./static/blender_logo.svg" height={100} width={100} style={{ paddingTop: 8, display: "inline", verticalAlign: "baseline", height: 100,
									    }} alt="Blender logo" />
        </Stack>

	{/* primary benefits */}
        <Container sx={{ pt: 4 }} maxWidth="md">
          <Grid container spacing={3} id="intro-cards">
            {intro_cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContentNoPadding sx={{ flexGrow: 1 }}>
		    {card.primary}
		    {card.secondary}
		    {card.icon}
                  </CardContentNoPadding>
                </Card>
              </Grid>
            ))}
          </Grid>
	</Container>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
	      <RentaflopButton button_class="cta_button" text="Recover your crypto" dest={"/contact"} />
	      <RentaflopButton button_class="button_style" text="Learn more" dest={"/about"} />
            </Stack>

	{/* how rentaflop compares to alternatives table */}
	{ is_large_screen &&
	  <>
	    <RentaflopTable title={table_title} cols={table_cols} body={table_body} footer={table_footer} />
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
            >
	      <RentaflopButton button_class="cta_button" text="Recover your crypto" dest={"/contact"} />
	      <RentaflopButton button_class="button_style" text="Learn more" dest={"/about"} />
            </Stack>
	  </>
	}

	{/* how it works */}
        <Container maxWidth="md">
 	  <RentaflopText title={tutorial_title} padding={"64px"} />
             <Grid container spacing={4} id="tutorial">
               {tutorial_cards.map((card) => (
		 <Grid item key={card.id} xs={12} sm={6} md={4}>
                   <Card
                     sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                   >
                     <CardContentNoPadding sx={{ flexGrow: 1 }}>
		       {card.step}
		       {card.instruction}
		       {card.icon}
		     </CardContentNoPadding>
		   </Card>
		 </Grid>
	       ))}
	     </Grid>
        </Container>

	{/* social proof */}
        <Container maxWidth="md">
	  <RentaflopText title={business_title} padding={"64px"} />
             <Grid container spacing={4} id="business">
               {business_cards.map((card) => (
		 <Grid item key={card.id} xs={12} sm={6} md={4}>
		   <Link href={card.url}>
		     {card.img}
		   </Link>
		 </Grid>
	       ))}
	     </Grid>
	  <RentaflopText title={social_title} padding={"64px"} />
             <Grid container spacing={4} id="social">
               {social_cards.map((card) => (
		 <Grid item key={card.id} xs={12} sm={12} md={12}>
                   <Card
                     sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                   >
                     <CardContentNoPadding sx={{ flexGrow: 1 }}>
		       {card.author}
		       {card.quote}
		     </CardContentNoPadding>
		   </Card>
		 </Grid>
	       ))}
	     </Grid>
          <Stack
            sx={{ pt: 4, pb: 3 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
	    <RentaflopButton button_class="cta_button" text="Start recovery" dest={"/contact"} />
	    <RentaflopButton button_class="button_style" text="Learn more" dest={"/about"} />
          </Stack>
        </Container>
      </main>
    </Page>
  );
}
