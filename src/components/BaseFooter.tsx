import styles from "@/styles/Layout.module.scss";

export default function Footer() {
  return (
    <footer>
      <div id={styles.wrapper}>&copy; {new Date().getFullYear()} FurDevs, redesigned by @skepfusky.</div>
    </footer>
  );
}
