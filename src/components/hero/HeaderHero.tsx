import Section from "@/components/section/Section"
import styles from "./HeaderHero.module.scss";
import FurDevsScroller from "./FurDevsScroller"

export default function HeaderHero() {
  return (
    <Section className={styles["hero-wrapper"]}>
      <h2>Hello! We are...</h2>
      <FurDevsScroller />
    </Section>
  )
}
