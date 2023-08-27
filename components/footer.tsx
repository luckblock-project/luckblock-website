"use client";

import styles from "@/styles/footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import {
  BotIcon,
  LinktreeIcon,
  MediumIcon,
  TelegramIcon,
  TwitterIcon,
} from "./icons";
import { toast } from "react-toastify";

export default function Footer(): JSX.Element {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @temp - DUMMY SOLUTION
    // @ts-ignore
    const email = e.target.email.value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex))
      toast.success("Subscribed!");
    else
      toast.error("Invalid Email");
  }

  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.company}>
          <Image
            src="/logo.jpeg"
            alt="Luckblock Logo"
            width={120}
            height={40}
            quality={100}
          />
          <div>
            <Link href="https://twitter.com/luckblocketh" target="_blank">
              <TwitterIcon />
            </Link>
            <Link href="https://t.me/luckblockcommunity" target="_blank">
              <TelegramIcon />
            </Link>
            <Link href="https://t.me/luckblockbot" target="_blank">
              <BotIcon />
            </Link>
            <Link href="https://luckblock.medium.com/" target="_blank">
              <MediumIcon />
            </Link>
            <Link href="https://linktr.ee/luckblock" target="_blank">
              <LinktreeIcon />
            </Link>
          </div>
        </div>
        {/* <div className={styles.links_cols}>
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
        </div> */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <h4 className={styles.block_header}>SUBSCRIBE TO NEWSLETTER</h4>
          <input id="email" type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <hr />
      <p>© Copyright 2023. All Rights Reserved by Block Rover.</p>
    </footer>
  );
}
