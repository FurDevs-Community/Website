import styles from "./HeaderHero.module.scss";
import { langs } from "src/utils/Content";

export default function FurDevsScroller() {
  return (
    <div id={styles["lang-container"]}>
      <div id={styles["lang-wrapper"]}>
        {langs.map((lang, i) => (
          <span key={i}>{lang.start}</span>
        ))}
      </div>
      <span id={styles["lang-center"]}>FurDevs</span>
      <div id={styles["lang-wrapper"]}>
        {langs.map((lang, i) => (
          <span key={i}>{lang.end}</span>
        ))}
      </div>
    </div>
  )
}
