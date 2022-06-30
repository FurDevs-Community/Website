import Section from "@/components/section/Section"
import { BubbleParallaxLeft, BubbleParallaxRight } from "./BubbleParallax"
import styles from "./Features.module.scss"

export default function Features() {
  const feature = [
    { title: "Non-furs are welcome!", description: "Some description here" },
    { title: "Special events & Giveaways", description: "Some description here" },
    { title: "Resources", description: "Some description here" },
    { title: "Help & Support", description: "Some description here" },
  ]

  return (
    <Section style={{ paddingBlock: "4.5rem", width: " 100%" }}>
      <div className={`${styles["bubble-container"]} content-wrapper`}>
        <BubbleParallaxLeft />
        <div className={styles["bubble-list"]}>
          <h2 className="b-ui--header" style={{ margin: "0 auto" }}>
            We are growing in numbers!
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, quam eum! Suscipit numquam
            consequuntur corporis debitis error sunt earum reprehenderit, repudiandae cum et voluptatibus eius molestias
            maxime sapiente alias consectetur pariatur natus!
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
        <BubbleParallaxRight />
      </div>
    </Section>
  )
}
