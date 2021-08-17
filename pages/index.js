import Head from "../components/Head";
import Img from "next/image";

import Logo from "../public/img/logo.jpg";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head
        title="Siddharth Arumugam"
        desc="Siddharth Arumugam - Full stack Web Dev | Cyber Sec researcher."
        og_title="Siddharth Arumugam :: 0xMrNight"
        og_url="https://mrnight.tk/"
        og_image="/img/logo.jpg"
      />
      <main className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.logo}>
            <Img src={Logo} alt="My Logo" />
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
              ) is a Full stack web developer, Cybersecurity researcher and
              Linux enthusiast.{" "}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
