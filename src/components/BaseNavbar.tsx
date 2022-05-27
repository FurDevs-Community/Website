import styles from "@/styles/Layout.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <div id={styles.wrapper}>
        <Link href="/" passHref>
          <a id={styles.logo}>FurDevs</a>
        </Link>
        <nav>
          <ul id={styles["nav-items"]}>
            <li>Server Rules</li>
            <li>Staff</li>
            <li>Dev Showcase</li>
            <li>
              <Link href="/appeals">Ban Appeals</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
