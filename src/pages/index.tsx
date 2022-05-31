import Link from "next/link";
import BaseMetadata from "@/components/BaseMetadata";
import styles from "@/styles/Home.module.scss";
import Section from "@/components/Section";
import SectionItem from "@/components/SectionItem";

export default function Home() {
  return (
    <>
      <BaseMetadata title="Home" description="lol" />
      <div className={styles.home}>
        <div className="hero-wrapper">
          <h1>Hello! We are...</h1>
        </div>
        <Section>
          <h2 className="b-ui--header" style={{ margin: "0 auto" }}>
            We are growing in numbers!
          </h2>
          <div className={styles["bubble-container"]}>
            <div className={styles["bubble-images"]}>bubble</div>
            <div className={styles["bubble-list"]}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, quam eum! Suscipit numquam
                consequuntur corporis debitis error sunt earum reprehenderit, repudiandae cum et voluptatibus eius
                molestias maxime sapiente alias consectetur pariatur natus!
              </p>
            </div>
            <div className={styles["bubble-images"]}>bubble</div>
          </div>
        </Section>
        <Section header="Server staff">
          <div className={styles["items-carousel"]}>
            <SectionItem />
            <SectionItem />
            <SectionItem />
            <SectionItem />
          </div>
        </Section>
        <Section header="Dev showcase">
          <div className={styles["items-carousel"]}>
            <SectionItem />
            <SectionItem />
            <SectionItem />
            <SectionItem />
          </div>
        </Section>
        <Section header="Need help?">a</Section>
      </div>
    </>
  );
}
