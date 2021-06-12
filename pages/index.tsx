import Head from "next/head";
import Image from "next/image";
import Staff from "../components/Staff";
import { staffTeam } from "../components/StaffTeam";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.heading}>
        <h1>FurDevs</h1>
        <p>
          FurDevs is a furry community that revolves around technology and
          programming. No matter if you're new to coding or a professional or
          even part of the Furry Community or not Everyone is welcomed.{" "}
        </p>
        <div className={styles.buttons}>
          <button>Learn More</button>
          <button>Join our Discord</button>
        </div>
      </section>
      <section className={styles.parentStaffTeam}>
        <h2 className={`center`}>Our Staff Team</h2>
        <div className={`${styles.staffTeam}`}>
          {/** TODO: Once FDevs Bot is Ready fetch staff from API */}
          {staffTeam.map(({ color, imageURL, role, staffName, socials }) => (
            <Staff
              staffName={staffName}
              color={color}
              imageURL={imageURL}
              role={role}
              socials={socials}
            />
          ))}
        </div>
      </section>



      <div className={styles.aboutUs}>
        <div>
          <h2 className={`center`}>Features</h2>
          <div className={`${styles.features}`}>
            <div>
              <img
                src="https://discord.com/assets/509dd485f6269e2521955120f3e8f0ef.svg"
                alt=""
              />
              <h3>Support in MANY programming languages and topics</h3>
            </div>
            <div>
              <img
                src="https://discord.com/assets/202dcb7b0453a308167e21fc7a3a06d3.svg"
                alt=""
              />
              <h3>Learn how to program and Build your dream projects!</h3>
            </div>
            <div>
              <img
                src="https://discord.com/assets/aff6d39f4947f22f042e67ac21a9dc7a.svg"
                alt=""
              />
              <h3>Other topics unrelated to programming!</h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
