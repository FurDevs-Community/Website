import React, { ReactElement } from "react";
import styles from "./../styles/Footer.module.css";

interface Props {}

export default function Footer({}: Props): ReactElement {
    return (
        <div className={styles.footer}>
            <div>
                <h3 className="center">FurDevs</h3>
                <div>
                    <button className={`grow ${styles.btn}`}>Join Our Server</button>
                </div>
            </div>
            <div>
                <h3 className="center">All Rights Reserved</h3>
            </div>
            <div>
                <h3 className="center">Social Media</h3>
                <div className={styles.socials}>
                    <div>
                        <a href="https://discord.gg/RkMCWWFSBg">
                            <i className={`fab fa-discord`}></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://twitter.com/Fur_Devs">
                            <i className={`fab fa-twitter`}></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/FurDevs-Community">
                            <i className={`fab fa-github`}></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
