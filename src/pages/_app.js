import React from 'react';
import Script from 'next/script';
// import '../index.css'
import '../App.css';
import Head from 'next/head'


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
	<meta charSet="utf-8" />
	<meta
	  name="viewport"
	  content="minimum-scale=1, initial-scale=1, width=device-width"
	/>
	<meta name="theme-color" content="#000000" />
	{/* if modified, update portal _app.js and blog/[slug].js */}
	<title>rentaflop</title>
	<meta property="og:title" content="rentaflop" key="og:title" />
	{/* intentionally omitted since it's tough to get url from here
	    <meta property="og:url" content={"https://portal.rentaflop.com/blog/"+post.slug.replace(/\.md$/, '')} /> 
	 */}
	<meta property="og:image" content="https://recovery.rentaflop.com/static/rentaflop_logo.png" key="og:image" />
	<meta property="og:type" content="website" key="og:type" />
	<meta property="og:description" content="Crypto wallet password recovery" key="og:description" />
	<meta property="description" content="Crypto wallet password recovery" key="description" />
	{/* NOTE: do not place script tags in next/head, they won't load */}
      </Head>

      <Component {...pageProps} />
	{/*
	   Google tag (gtag.js)
	 */}
	<Script src="https://www.googletagmanager.com/gtag/js?id=G-FKBK6XSRHB" strategy="afterInteractive" />
	<Script id="google-analytics" strategy="afterInteractive">
	  {`
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('set', 'linker', {
	    'domains': ['recovery.rentaflop.com']
	  });
	  gtag('js', new Date());

	  gtag('config', 'G-FKBK6XSRHB');
        `}
	</Script>
	<Script id="gh-pages" type="text/javascript" strategy="afterInteractive">
	  {`
	// Single Page Apps for GitHub Pages
	// MIT License
	// https://github.com/rafgraph/spa-github-pages
	// This script checks to see if a redirect is present in the query string,
	// converts it back into the correct url and adds it to the
	// browser's history using window.history.replaceState(...),
	// which won't cause the browser to attempt to load the new url.
	// When the single page app is loaded further down in this file,
	// the correct url will be waiting in the browser's history for
	// the single page app to route accordingly.
	(function(l) {
          if (l.search[1] === '/' ) {
            var decoded = l.search.slice(1).split('&').map(function(s) { 
              return s.replace(/~and~/g, '&')
            }).join('?');
            window.history.replaceState(null, null,
					l.pathname.slice(0, -1) + decoded + l.hash
				       );
          }
	}(window.location))
        `}
	</Script>
	{/* leadfeeder */}
	{/* <Script id="ldfdr-script-loader" type="text/javascript" strategy="afterInteractive">
	  {`
(function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('kn9Eq4Ry2pr7RlvP');
`}
</Script> */}
	</>
  );
}
