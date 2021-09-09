import { featuresList } from "../components/Featuring/Features";
import Staff from "../components/Staff/Staff";
import styles from "./../styles/Home.module.css";
import Feature from "../components/Featuring/Feature";
import { useEffect, useState } from "react";
import { api } from "../settings";
import Typings from "../components/Utils/Typings";

export default function Home() {
    const [staffTeam, setStaffTeam] = useState(null);
    const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     const fetchStaffTeam = async () => {
    //         fetch(`${api}/latest/fdevs/staffMembers`).then(async (res) => {
    //             setStaffTeam(await res.json());
    //         });
    //     };
    //     fetchStaffTeam().then(() => {
    //         setLoading(false);
    //     });
    // }, []);
    return (
        <div className={styles.home}>
            <section className={styles.heading}>
                <div>
                    <h2>A Furry/Programming Community</h2>
                    <p>
                        <Typings
                            text="FurDevs is a furry community that revolves around
                        technology and programming. Whether you are an
                        experienced programmer, just learning, or even part of
                        the furry community, everyone is welcomed."
                            ms={75}
                        />
                    </p>
                    <div className={styles.buttons}>
                        <button className={`grow`}>Learn More</button>
                        <button className={`grow`}>Join our Discord</button>
                    </div>
                    <div className={styles.icons}>
                        <i className="fab fa-node-js" />
                        <i className="fab fa-java" />
                        <i className="fab fa-php" />
                        <i className="fas fa-cogs" />
                        <i className="fab fa-js" />
                        <i className="fab fa-python" />
                    </div>
                </div>
                <div>
                    <img src="/images/pawComputer.svg" alt="" />
                </div>
            </section>
        </div>
    );
}
