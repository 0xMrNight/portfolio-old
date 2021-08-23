import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Link href="/"> 0xMrNight </Link>
        </div>
      </div>

      <div className={styles.menu}>
        <ul className={styles.menu_inner}>
          {/* Todo: Make about and contact page */}
          <li>
            {" "}
            <Link href="https://blog.mrnight.me/about"> About </Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="https://blog.mrnight.me/contact"> Contact </Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="https://blog.mrnight.me/"> Blog </Link>{" "}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
