import styles from "@/styles/footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, InstagramIcon, TwitterIcon } from "./icons";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.company}>
          <Image
            src="/logo.png"
            alt="Blockrover Logo"
            width={120}
            height={40}
            quality={100}
          />
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <div>
            <Link href="https://twitter.com/">
              <TwitterIcon />
            </Link>
            <Link href="https://instagram.com">
              <InstagramIcon />
            </Link>
            <Link href="https://github.com/HeimLabs/blockrover">
              <GithubIcon />
            </Link>
          </div>
        </div>
        <div className={styles.links_cols}>
          <div>
            <h4 className={styles.block_header}>COMPANY</h4>
            <div className={styles.links_list}>
              <Link href="/about">About</Link>
              <Link href="/solutions">Solutions</Link>
              <Link href="/roadmap">Roadmap</Link>
              <Link href="/career">Career</Link>
            </div>
          </div>
          <div>
            <h4 className={styles.block_header}>HELP</h4>
            <div className={styles.links_list}>
              <Link href="/about">Customer Support</Link>
              <Link href="/about">Privacy Policy</Link>
              <Link href="/about">Terms & Conditions</Link>
              <Link href="/about">Cookies Policy</Link>
            </div>
          </div>
        </div>
        <form className={styles.form}>
          <h4 className={styles.block_header}>SUBSCRIBE TO NEWSLETTER</h4>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <hr />
      <p>© Copyright 2023, All Rights Reserved by Block Rover</p>
    </footer>
  );
}
