import styles from "@/styles/Layout.module.scss"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 69
      if (isTop !== active) setActive(isTop)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [active])

  return (
    <header className={active ? "" : "active"}>
      <div id={styles.wrapper}>
        <Link href="/" passHref>
          <a id={styles.logo}>FurDevs</a>
        </Link>
        <nav>
          <ul id={styles["nav-items"]}>
            <li>
              <Link href="/#server-rules">
                <a>Server Rules</a>
              </Link>
            </li>
            <li>
              <Link href="/#staff">
                <a>Staff</a>
              </Link>
            </li>
            <li>
              <Link href="/#dev-showcase">
                <a>Dev Showcase</a>
              </Link>
            </li>
            <li>
              <Link href="/appeals">Ban Appeals</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
