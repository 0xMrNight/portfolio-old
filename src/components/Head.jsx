import Head from "next/head";
import { useRouter } from "next/router";
import site from "../site.json";

function TheHead(props) {
  const router = useRouter();
  const { title, desc, og_title, og_image } = props;
  const metaTitle = og_title ? og_title : title;
  const url = site.baseURL + router.pathname;

  return (
    <Head>
      {/* Required tags */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="theme-color" content="#2e3440" />
      {/* Title */}
      <title>{title}</title>
      <meta property="og:title" content={metaTitle} />
      <meta property="twitter:title" content={metaTitle} />
      {/* Description */}
      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />
      <meta property="twitter:description" content={desc} />
      {/* Misc */}
      <meta name="author" content="Siddharth Arumugam" />
      <link rel="canonical" href={url} />
      {/* OG tags */}
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en-US" />
      <meta property="og:type" content="website" />
      (site.siteName && <meta property="og:site_name" content={site.siteName} />
      ){/* Thumbnail */}
      {og_image && (
        <>
          <meta property="og:image" content={og_image} />
          <meta property="twitter:image" content={og_image} />
        </>
      )}
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={`@${site.twitter}`} />
      <meta name="twitter:creator" content="@0xMrNight" />
      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}

export default TheHead;
