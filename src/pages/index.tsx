import Link from "next/link";
import BaseMetadata from "@/components/BaseMetadata";
import styles from "@/styles/Home.module.scss";
import Section from "@/components/Section";
import SectionItem from "@/components/SectionItem";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  const feature = [
    { title: "Non-furs are welcome!", description: "Some description here" },
    { title: "Special events & Giveaways", description: "Some description here" },
    { title: "Resources", description: "Some description here" },
    { title: "Help & Support", description: "Some description here" },
  ];

  return (
    <>
      <BaseMetadata title="Home" description="lol" />
      <ParallaxProvider>
        <div className={styles.home}>
          <section className="hero-wrapper">
            <h2>Hello! We are...</h2>
            {/* <FurDevsScroller /> */}
          </section>
          <Section style={{ paddingBlock: "4.5rem", width: " 100%" }}>
            <div className={`${styles["bubble-container"]} content-wrapper`}>
              <div className={styles["bubble-images"]}>
                <Parallax speed={9}>
                  <img
                    src="/images/staff/ammy.png"
                    alt="avatar"
                    style={{ width: "55%", transform: "translate(4.43rem, -1rem)" }}
                  />
                </Parallax>
                <Parallax speed={12}>
                  <img
                    src="/images/staff/ammy.png"
                    alt="avatar"
                    style={{ width: "67%", transform: "translate(-3.07rem, -0.5rem)" }}
                  />
                </Parallax>
                <Parallax speed={5}>
                  <img
                    src="/images/staff/ammy.png"
                    alt="avatar"
                    style={{ width: "40%", transform: "translate(5.23rem, 0.2rem)" }}
                  />
                </Parallax>
                <Parallax speed={19}>
                  <img
                    src="/images/staff/ammy.png"
                    alt="avatar"
                    style={{ width: "66%", transform: "translate(-2.87rem, -0.8rem)" }}
                  />
                </Parallax>
              </div>
              <div className={styles["bubble-list"]}>
                <h2 className="b-ui--header" style={{ margin: "0 auto" }}>
                  We are growing in numbers!
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, quam eum! Suscipit numquam
                  consequuntur corporis debitis error sunt earum reprehenderit, repudiandae cum et voluptatibus eius
                  molestias maxime sapiente alias consectetur pariatur natus!
                </p>
                <ul>
                  {feature.map((item, index) => (
                    <li className={styles["feature-item"]} key={index}>
                      <img src="/images/staff/ammy.png" alt="avatar" />
                      <div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles["bubble-images"]}>
                <Parallax speed={9}>
                  <img
                    src="/images/staff/ammy.png"
                    alt="avatar"
                    style={{ width: "88%", transform: "translate(-0.2rem, -1.9rem)" }}
                  />
                </Parallax>
                <Parallax speed={7}>
                  <img
                    src="/images/staff/ammy.png"
                    alt="avatar"
                    style={{ width: "45%", transform: "translate(7.4rem, -1.2rem)" }}
                  />
                </Parallax>
                <Parallax speed={21}>
                  <img
                    src="/images/staff/ammy.png"
                    alt="avatar"
                    style={{ width: "66%", transform: "translate(0.8rem, -3rem)" }}
                  />
                </Parallax>
              </div>
            </div>
          </Section>
          <Section header="Our server staff" className="content-wrapper">
            <div className={styles["items-carousel"]}>
              <SectionItem />
              <SectionItem />
              <SectionItem />
              <SectionItem />
            </div>
          </Section>
          <Section header="Dev showcase" className="content-wrapper">
            <div className={styles["items-carousel"]}>ff</div>
          </Section>
          <Section>
            <div className="content-wrapper">
              <h2 className="b-ui--header">Need some help?</h2>
              aa
            </div>
          </Section>
        </div>
      </ParallaxProvider>
    </>
  );
}
