import Link from "next/link"
import BaseMetadata from "@/components/BaseMetadata";
import styles from "@/styles/Home.module.scss"

export default function Home() {
  return (
    <>
    <BaseMetadata title="Home" description="lol" />
    <div className={styles.home}>
      <h1>Hello There</h1>
      <h2>Our Website is currently being reworked on</h2>
      <Link href="https://discord.gg/RkMCWWFSBg">
        <button>Come Join Our Server</button>
      </Link>
    </div>
    </>
  );
}
