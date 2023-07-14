import styles from "@/styles/hero.module.scss";
import Image from "next/image";
import Link from "next/link";
import HeroRobo from "../../public/hero-robo.png";
import Badge from "../badge";
import { AngleRightIcon } from "../icons";
import { UnderlineText } from "../underlineText";

export default function Hero(): JSX.Element {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.hero_content}>
        <Badge className={styles.hero_badge}>
          <Image src="./pie.svg" alt="pie icon" height={20} width={20} />
          Launching on Uniswap 07.20.23
        </Badge>
        <h1 title="$ROVER: Blockchain Innovation">
          <UnderlineText
            text="Next-Gen"
            className={styles.hero_content_underline_text}
          />{" "}
          security and trading tools to elevate your DeFi experience
        </h1>
        <p>
          Unlock the limitless potential of the blockchain with $ROVER, the
          trailblazing token revolutionizing the digital landscape. Pioneering
          an era of transparency, security, and efficiency
        </p>
        <div className={styles.hero_buttons}>
          <Link className={styles.hero_btn} href="/">
            BETA <AngleRightIcon />
          </Link>
          <Link className={styles.hero_btn} href="https://t.me/blockroverbot" target="_blank">
            Telegram Bot <AngleRightIcon />
          </Link>
        </div>
      </div>
      <div className={styles.hero_image}>
        <Image src={HeroRobo} alt="BlockRover Bot" />
        <div className={styles.image_glow} />
      </div>
    </section>
  );
}
