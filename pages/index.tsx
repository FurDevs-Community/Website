import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.heading}>
        <h1>What are you waiting for? Build your first __________</h1>
        <div className={styles.buttons}>
          <button>Learn More</button>
          <button>Join our Discord</button>
        </div>
      </section>
      <div className={styles.aboutUs}>
        <div>
          <h2>About the server...</h2>
          <p>
            <strong>FurDevs</strong> is a <u>Programming Community</u> for{" "}
            <u>Developers and Furries</u> who are interested in programming. No
            matter how experienced you are when it comes to programming or part
            of the furry fandom or not everyone is welcomed to Join! We
            friendly/supportive programming community that'll help you with many
            things that relates to programming and help you out build your dream
            projects.
          </p>
        </div>
        <div>
        <h2 className={`center`}>Features</h2>
        <div className={`${styles.features}`}>
          <div>
            <img src="https://discord.com/assets/509dd485f6269e2521955120f3e8f0ef.svg" alt="" />
            <h3>Support in MANY programming languages and topics</h3>
          </div>
          <div>
            <img src="https://discord.com/assets/202dcb7b0453a308167e21fc7a3a06d3.svg" alt="" />
            <h3>Learn how to program and Build your dream projects!</h3>
          </div>
          <div>
            <img src="https://discord.com/assets/aff6d39f4947f22f042e67ac21a9dc7a.svg" alt="" />
            <h3>Other topics unrelated to programming!</h3>
          </div>
        </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
