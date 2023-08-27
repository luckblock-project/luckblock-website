import styles from "@/styles/contactUs.module.scss";
import Link from "next/link";
import { DocsIcon, TelegramIcon, TwitterIcon } from "../icons";

export default function ContactUs(): JSX.Element {
  return (
    <div className={styles.contact_us}>
      <div className={styles.innerContainer}>
        <Link className={styles.contact_card} href="https://t.me/luckblockcommunity" target="_blank" rel="noreferrer">
          <span className={styles.icon}>
            <TelegramIcon />
          </span>
          <span className={styles.handles}>
            <p>JOIN OUR</p>
            <h3>Telegram</h3>
          </span>
        </Link>
        <Link className={styles.contact_card} href="https://twitter.com/luckblocketh" target="_blank" rel="noreferrer">
          <span className={styles.icon}>
            <TwitterIcon />
          </span>
          <span className={styles.handles}>
            <p>FOLLOW OUR</p>
            <h3>Twitter</h3>
          </span>
        </Link>
        <Link className={styles.contact_card} href="https://litepaper.luckblockproject.org" target="_blank" rel="noreferrer">
          <span className={styles.icon}>
            <DocsIcon />
          </span>
          <span className={styles.handles}>
            <p>SEE OUR</p>
            <h3>LitePaper</h3>
          </span>
        </Link>
      </div>
    </div>
  );
}
