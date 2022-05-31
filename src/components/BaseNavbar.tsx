import styles from "@/styles/Layout.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <div id={styles.wrapper}>
        <Link href="/" passHref>
          <a id={styles.logo}>FurDevs</a>
        </Link>
        <ul id={styles["nav-items"]} role="navigation">
          <li><Link href="#server-rules"><a>Server Rules</a></Link></li>
          <li><Link href="#staff"><a>Staff</a></Link></li>
          <li><Link href="#dev-showcase"><a>Dev Showcase</a></Link></li>
          <li>
            <Link href="/appeals">Ban Appeals</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
