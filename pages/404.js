import styles from "../styles/404.module.css";
import Link from "next/link";

export default function custom404() {
  return (
    <div className={styles.container}>
      <h1>404 - Page not found</h1>
      <h3 className={styles.desc}>
        {" "}
        Return to the <Link href="/"> Home page </Link>{" "}
      </h3>
    </div>
  );
}
