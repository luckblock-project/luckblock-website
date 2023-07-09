"use client";

import { BarsIcon, CrossIcon } from "@/components/icons";
import styles from "@/styles/navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Navbar(): JSX.Element {
  useEffect(() => {
    const mobile_nav = document.getElementById("mobile_nav");
    const open_button = document.getElementById("open_button");
    const close_button = document.getElementById("close_button");

    open_button?.addEventListener("click", () => {
      openNav(mobile_nav, open_button, close_button);
    });

    close_button?.addEventListener("click", () => {
      closeNav(mobile_nav, open_button, close_button);
    });

    return () => {
      open_button?.removeEventListener("click", () => {
        openNav(mobile_nav, open_button, close_button);
      });

      close_button?.removeEventListener("click", () => {
        closeNav(mobile_nav, open_button, close_button);
      });
    };
  }, []);

  const closeNavOnScroll = () => {
    const mobile_nav = document.getElementById("mobile_nav");
    const open_button = document.getElementById("open_button");
    const close_button = document.getElementById("close_button");

    closeNav(mobile_nav, open_button, close_button);
  }

  const openNav = (mobile_nav: any, open_button: any, close_button: any) => {
    mobile_nav.classList.remove("hide");
    open_button.classList.add("hide");
    close_button.classList.remove("hide");
  };

  const closeNav = (mobile_nav: any, open_button: any, close_button: any) => {
    mobile_nav.classList.add("hide");
    open_button.classList.remove("hide");
    close_button.classList.add("hide");
  };

  return (
    <nav className={`${styles.navbar}`}>
      <div className={styles.desktop_view}>
        <div className={styles.logo}>
          <Link href="/" scroll={false}>
            <Image
              src="/logo.png"
              alt="Blockrover Logo"
              width={240}
              height={60}
              quality={100}
            />
          </Link>
        </div>
        <div className={styles.navlinks}>
          <ul>
            <li>
              <Link href="/" scroll={false}>Home</Link>
            </li>
            <li>
              <Link href="#solutions" scroll={false}>Solutions</Link>
            </li>
            <li>
              <Link href="#rover" scroll={false}>$ROVER</Link>
            </li>
            <li>
              <Link href="#roadmap" scroll={false}>Roadmap</Link>
            </li>
            <li>
              <Link href="#contact-us" scroll={false}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className={styles.signup_login}>
          <Link href="https://litepaper.blockroverproject.io" target="_blank" rel="noreferrer">Litepaper</Link>
          <Link href="https://linktr.ee/blockrover" target="_blank" rel="noreferrer">Linktree</Link>
        </div>
      </div>
      <div className={styles.mobile_view}>
        <div className={styles.mobile_logo}>
          <Link href="/" scroll={false} onClick={closeNavOnScroll}>
            <Image
              src="/logo.png"
              alt="Blockrover Logo"
              width={180}
              height={40}
              quality={100}
            />
          </Link>
        </div>
        <BarsIcon id="open_button" />
        <div id="mobile_nav" className="overlay hide">
          <CrossIcon id="close_button" className="hide overlay_close_button" />
          <div className={styles.mobile_nav_content}>
            <ul>
              <li>
                <Link href="/" scroll={false} onClick={closeNavOnScroll}>Home</Link>
              </li>
              <li>
                <Link href="#solutions" scroll={false} onClick={closeNavOnScroll}>Solutions</Link>
              </li>
              <li>
                <Link href="#rover" scroll={false} onClick={closeNavOnScroll}>$ROVER</Link>
              </li>
              <li>
                <Link href="#roadmap" scroll={false} onClick={closeNavOnScroll}>Roadmap</Link>
              </li>
              <li>
                <Link href="#contact-us" scroll={false} onClick={closeNavOnScroll}>Contact Us</Link>
              </li>
            </ul>
            <div className={styles.signup_login}>
              <Link href="https://litepaper.blockroverproject.io" target="_blank" rel="noreferrer">Litepaper</Link>
              <Link href="https://linktr.ee/blockrover" target="_blank" rel="noreferrer">Linktree</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
