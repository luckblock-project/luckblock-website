import styles from "@/styles/contactUs.module.scss";
import Link from "next/link";
import { DocsIcon, TelegramIcon, TwitterIcon } from "../icons";

export default function ContactUs(): JSX.Element {
  return (
    <div className={styles.contact_us}>
      <Link className={styles.contact_card} href="https://web.telegram.org/">
        <span className={styles.icon}>
          <TelegramIcon />
        </span>
        <span className={styles.handles}>
          <p>JOIN OUR</p>
          <h3>Telegram</h3>
        </span>
      </Link>
      <Link className={styles.contact_card} href="https://twitter.com/">
        <span className={styles.icon}>
          <TwitterIcon />
        </span>
        <span className={styles.handles}>
          <p>FOLLOW OUR</p>
          <h3>Twitter</h3>
        </span>
      </Link>
      <Link className={styles.contact_card} href="https://google.com">
        <span className={styles.icon}>
          <DocsIcon />
        </span>
        <span className={styles.handles}>
          <p>SEE OUR</p>
          <h3>LitePaper</h3>
        </span>
      </Link>
    </div>
  );
}