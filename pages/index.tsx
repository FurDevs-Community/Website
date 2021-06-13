import Head from "next/head";
import Image from "next/image";
import { featuresList } from "../components/Features";
import Staff from "../components/Staff";
import { staffTeam } from "../components/StaffTeam";
import styles from "../styles/Home.module.css";
import Feature from "../components/Feature";

export default function Home() {
    return (
        <div className={styles.home}>
            <section className={styles.heading}>
                <h1>FurDevs</h1>
                <p>
                    FurDevs is a furry community that revolves around technology
                    and programming. Whether you are an experienced programmer,
                    just learning, or even part of the furry community, everyone
                    is welcomed.{" "}
                </p>
                <div className={styles.buttons}>
                    <button className={`grow`}>Learn More</button>
                    <button className={`grow`}>Join our Discord</button>
                </div>
            </section>
            <section className={styles.parentStaffTeam}>
                <h2 className={`center`}>Our Staff Team</h2>
                <div className={`${styles.staffTeam}`}>
                    {/** TODO: Once FDevs Bot is Ready fetch staff from API */}
                    {staffTeam.map(
                        ({ color, imageURL, role, staffName, socials }) => (
                            <Staff
                                staffName={staffName}
                                color={color}
                                imageURL={imageURL}
                                role={role}
                                socials={socials}
                            />
                        )
                    )}
                </div>
            </section>
            <section>
                <h2 className={`center`}>Features</h2>
                <div className={`${styles.features}`}>
                    {featuresList.map((feature) => (
                        <Feature
                            description={feature.description}
                            icon={feature.icon}
                            title={feature.title}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
