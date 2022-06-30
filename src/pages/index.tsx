import Link from "next/link"
import BaseMetadata from "@/components/BaseMetadata"
import styles from "@/styles/Home.module.scss"
import Section from "@/components/section/Section"
import { ParallaxProvider } from "react-scroll-parallax"
import HeaderHero from "@/components/hero/HeaderHero"
import Features from "@/components/features/Features"
import Admins from "@/components/admins/Admins"

export default function Home() {
  return (
    <ParallaxProvider>
      <BaseMetadata title="Home" description="lol" />
      <div className={styles.home}>
        <HeaderHero />
        <Features />
        <Admins />
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
  )
}
