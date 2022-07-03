import { Parallax } from "react-scroll-parallax"
import styles from "./Features.module.scss"

export function BubbleParallaxLeft() {

  return (
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
  )
}

export function BubbleParallaxRight() {
  return (
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
  )
}
