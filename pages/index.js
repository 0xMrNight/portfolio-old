import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="I am Siddharth Arumugam - Full stack Web Dev and Cyber Sec researcher."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="author" content="Siddharth Arumugam" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@0xMrNight" />
        <meta name="twitter:creator" content="@0xMrNight" />
        <meta property="og:url" content="https://mrnight.tk/" />
        <title> Siddharth Arumugam </title>
      </Head>
      <main>
        <div className={styles.title}>
          {" "}
          Hi, I&apos;m <span className={styles.name}> Sid </span>{" "}
        </div>
      </main>
    </div>
  );
}
