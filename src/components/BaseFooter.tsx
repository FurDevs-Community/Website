import styles from "@/styles/Layout.module.scss";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faTwitter, faRedditAlien } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const socials = [
    {
      name: "Discord",
      url: "https://discord.gg/RkMCWWFSBg",
      icon: faDiscord,
    },
    {
      name: "GitHub",
      url: "https://github.com/FurDevs",
      icon: faGithub,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/FurDevs",
      icon: faTwitter,
    },
    {
      name: "Reddit",
      url: "https://reddit.com/r/FurDevs",
      icon: faRedditAlien,
    },
  ];

  return (
    <footer>
      <div id={styles.wrapper}>
        <span id={styles.copyright}>
          &copy; 2020-{new Date().getFullYear()} FurDevs, redesign and VFX by{" "}
          <a href="https://twitter.com/skepfuskyjs" target="_blank">
            @skepfuskyjs
          </a>
          .
        </span>
        <span id={styles.socials}>
          {socials.map((social) => (
            <a key={social.name} href={social.url} target="_blank">
              <FaIcon icon={social.icon} size="lg" />
            </a>
          ))}
        </span>
      </div>
    </footer>
  );
}
