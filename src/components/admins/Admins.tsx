import Section from "@/components/section/Section"
import SectionItem from "@/components/section/SectionItem"
import styles from "./Admins.module.scss"

export default function Admins() {
  return (
    <Section header="Our server staff" className="content-wrapper">
      <div className={styles["items-carousel"]}>
        <SectionItem />
        <SectionItem />
        <SectionItem />
        <SectionItem />
      </div>
    </Section>
  )
};
