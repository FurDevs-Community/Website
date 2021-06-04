import React from 'react'
import styles from './../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div className={`flex ${styles.navbar}`}>
            <div className={`flex ${styles.brand}`}>
                <img src="/images/logo.png" alt="FurDevs Logo" />
                <h1>FurDevs</h1>
            </div>
            <div className={`flex ${styles.buttons}`}>
                <ul className={`flex`}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Rules</li>
                    {/**TODO: Make it display either Login/Profile */}
                    <li>Profile</li>
                </ul>
                <div>
                    <button>Join Our Server</button>
                </div>
            </div>
        </div>
    )
}
