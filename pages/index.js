import Head from "../components/Head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head
        title="Siddharth Arumugam"
        desc="Siddharth Arumugam - Full stack Web Dev | Cyber Sec researcher."
        og_title="Siddharth Arumugam :: 0xMrNight"
        og_url="https://mrnight.tk/"
      />
      <main>
        <div className={styles.title}>
          {" "}
          Hi, I&apos;m <span className={styles.name}> Sid </span>{" "}
        </div>
      </main>
    </div>
  );
}
