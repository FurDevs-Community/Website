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
                            text="FurDevs is a Technology/Programming Community where we discuss about Technology as well as Programming. Our goal is to help make your project whether it's your first or your million-th project. We're willing to help you out as well as bring long time friendships with others in the server."
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
                        <i className="fab fa-rust" />
                    </div>
                </div>
                <div>
                    <img src="/images/pawComputer.svg" alt="" />
                </div>
            </section>
        </div>
    );
}
