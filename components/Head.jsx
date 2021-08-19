import Head from "next/head";

const theHead = ({ title, desc, og_title, og_url, og_image }) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="theme-color" content="#2e3440" />
      <meta name="description" content={desc} />
      <meta name="author" content="Siddharth Arumugam" />
      <link rel="canonical" href={og_url} />
      {/* OG tags */}
      <meta property="og:url" content={og_url} />
      <meta property="og:locale" content="en-US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="0xMrNight" />
      <meta property="og:title" content={og_title} />
      <meta property="og:description" content={desc} />
      if (og_image){" "}
      {
        <>
          <meta property="og:image" content={og_image} />
          <meta property="twitter:image" content={og_image} />
        </>
      }
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@0xMrNight" />
      <meta name="twitter:creator" content="@0xMrNight" />
      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <title> {title} </title>
    </Head>
  );
};

export default theHead;
