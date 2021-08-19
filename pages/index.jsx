import Head from "../components/Head";
import Img from "next/image";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head
        title="Siddharth Arumugam"
        desc="Siddharth Arumugam - Full stack Web Dev | Cyber Sec researcher."
        og_title="Siddharth Arumugam :: 0xMrNight"
        path="/"
        og_image="/img/logo.jpg"
      />
      <main className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.logo}>
            <Img src="/img/logo.jpg" alt="My Logo" width={512} height={512} />
          </div>
          <div className={styles.title}>
            {" "}
            Hi, I&apos;m <span className={styles.name}> Sid </span>{" "}
          </div>
          <div className={styles.desc}>
            <p>
              {" "}
              Siddharth Arumugam (
              <a href="https://twitter.com/0xMrNight" rel="noopener">
                <code>0xMrNight</code>
              </a>
              ) is a full stack Web developer, Cybersecurity researcher and
              Linux enthusiast.{" "}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
