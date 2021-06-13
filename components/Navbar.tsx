import React from "react";
import styles from "./../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className={`flex ${styles.navbar}`}>
            <div className={`flex ${styles.brand}`}>
                    <img src="/images/logo.png" alt="FurDevs Logo" />
                <Link href="/">
                    <h1>FurDevs</h1>
                </Link>
            </div>
            <div className={`flex ${styles.buttons}`}>
                <ul className={`flex`}>
                    <Link href="/">
                        <li>
                            <a>Home</a>
                        </li>
                    </Link>
                    <Link href="/about">
                        <li>
                            <a>About</a>
                        </li>
                    </Link>
                    <Link href="/projects">
                        <li>
                            <a>Projects</a>
                        </li>
                    </Link>
                    <Link href="/partners">
                        <li>
                            <a>Partners</a>
                        </li>
                    </Link>
                    <Link href="/rules">
                        <li>
                            <a>Rules</a>
                        </li>
                    </Link>
                    <Link href="/profile">
                        <li>
                            <a>Profile</a>
                        </li>
                    </Link>
                    {/**TODO: Make it display either Login/Profile */}
                </ul>
                <div>
                    <a href="https://discord.gg/RkMCWWFSBg"><button className={`grow`}>Join Our Server</button></a>
                </div>
            </div>
        </div>
    );
}
