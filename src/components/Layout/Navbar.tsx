import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className={`flex ${styles.navbar}`}>
            <div className={`flex ${styles.brand}`}>
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
                    <Link href="/rules-info">
                        <li>
                            <a>Rules/Info</a>
                        </li>
                    </Link>
                    <Link href="/staff">
                        <li>
                            <a>Staff Team</a>
                        </li>
                    </Link>
                    <Link href="/partners">
                        <li>
                            <a>Partners</a>
                        </li>
                    </Link>
                    {/**TODO: Make it display either Login/Profile */}
                </ul>
                <div>
                    <Link href="https://discord.gg/RkMCWWFSBg">
                        <button className={`grow  ${styles.joinButton}`}>
                            Join
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
