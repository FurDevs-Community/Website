import { featuresList } from "../components/Features";
import Staff from "../components/Staff";
import styles from "../styles/Home.module.css";
import Feature from "../components/Feature";
import { useEffect, useState } from "react";
import { api } from "../settings";

export default function Home() {
    const [staffTeam, setStaffTeam] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchStaffTeam = async () => {
            fetch(`${api}/latest/fdevs/staffMembers`).then(async (res) => {
                setStaffTeam(await res.json());
            });
        };
        fetchStaffTeam().then(() => {
            setLoading(false);
        });
    }, []);
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
                    {!loading && staffTeam ? (
                        staffTeam.staffMembers.map(
                            ({ color, avatar, position, username }) => (
                                <Staff
                                    staffName={username}
                                    color={color}
                                    imageURL={avatar}
                                    role={position}
                                />
                            )
                        )
                    ) : (
                        <h1>Loading</h1>
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
