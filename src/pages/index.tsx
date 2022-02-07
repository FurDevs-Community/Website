import styles from "../styles/Home.module.scss";
import Link from 'next/link'

export default function Home() {
    return (
        <div className={styles.home}>
            <h1>Hello There</h1>
            <h2>Our Website is currently being reworked on</h2>
            <Link href="https://discord.gg/RkMCWWFSBg">
                <button>Come Join Our Server</button>
            </Link>
        </div>
    );
}
