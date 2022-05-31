import Link from "next/link";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";

import styles from "@/styles/Card.module.scss";
import { faFacebook, faGithub, faInstagram, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function SectionItem() {
  return (
    <div className={styles["item-container"]} itemType="https://schema.org/Person" itemScope>
      <img src="/images/staff/ammy.png" alt="avatar" />
      <h3>Name</h3>
      <span className="b-ui--emphasis">Role</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorem laudantium totam, expedita officia
        vero.
      </p>
      <div className={styles["admin-socials"]}>
        <Link href="#">
          <a>
            <FaIcon icon={faInstagram} size="lg" />
            </a>
        </Link>
        <Link href="#">
          <a>
            <FaIcon icon={faYoutube} size="lg" />
            </a>
        </Link>
        <Link href="#">
          <a>
            <FaIcon icon={faTwitter} size="lg" />
            </a>
        </Link>
        <Link href="#">
          <a>
            <FaIcon icon={faTwitch} size="lg" />
            </a>
        </Link>
        <Link href="#">
          <a>
            <FaIcon icon={faGithub} size="lg" />
            </a>
        </Link>
        <Link href="#">
          <a>
            <FaIcon icon={faFacebook} size="lg" />
            </a>
        </Link>
      </div>
    </div>
  );
}