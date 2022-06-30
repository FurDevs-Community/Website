import styles from "@/styles/Layout.module.scss";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { socials } from "src/utils/Content";

export default function Footer() {
  return (
    <footer>
      <div id={styles.wrapper}>
        <span id={styles.copyright}>
          &copy; 2020-{new Date().getFullYear()} FurDevs, redesigned by{" "}
          <a href="https://twitter.com/skepfuskyjs" target="_blank">
            @skepfuskyjs
          </a>
          .
        </span>
        <span id={styles.socials}>
          {socials.map((social) => (
            <a key={social.name} href={social.url} target="_blank">
              <FaIcon icon={social.icon} size="lg" />
            </a>
          ))}
        </span>
      </div>
    </footer>
  );
}
