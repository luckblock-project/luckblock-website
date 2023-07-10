import Badge from "@/components/badge";
import ContactUs from "@/components/home/contactUs";
import { OurToken } from "@/components/home/ourToken";
import Roadmap from "@/components/home/roadmap";
import { Solutions } from "@/components/home/solutions";
import { AngleRightIcon, PlayIcon } from "@/components/icons";
import { SectionHead } from "@/components/sectionHead";
import { UnderlineText } from "@/components/underlineText";
import styles from "@/styles/page.module.scss";
import Link from "next/link";
import Image from "next/image";
import HeroRobo from "../public/hero-robo.png"

export default function Home(): JSX.Element {
  return (
    <main className={styles.home_page}>
      {/* HERO */}
      <section id="home" className={styles.hero}>
        <div className={styles.hero_content}>
          <Badge className={styles.hero_badge}>
            <Image src="./pie.svg" alt="pie icon" height={20} width={20} />
            New Version Launched
          </Badge>
          <h1 title="$ROVER: Blockchain Innovation">
            Introducing{" "}
            <UnderlineText
              text="$ROVER"
              className={styles.hero_content_underline_text}
            />{" "}
            Unleashing the Power of Blockchain Innovation
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
          </div>
        </div>
        <div className={styles.hero_image}>
          <Image src={HeroRobo} alt="BlockRover Bot" />
          <div className={styles.image_glow} />
        </div>
      </section>
      {/* OUR SOLUTIONS */}
      <section id="solutions" className={styles.solutions}>
        <SectionHead
          title="Our Solutions"
          subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"
          className={styles.section_head}
        />
        <Solutions />
      </section>
      {/* ROVER */}
      <section id="rover" className={styles.token_section}>
        <div className={styles.curvedSectionDiv} />
        <SectionHead
          title="Our Token"
          subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"
          className={styles.section_head}
        />
        <OurToken />
      </section>
      {/* ROADMAP */}
      <section id="roadmap" className={styles.roadmap_section}>
        <SectionHead
          title="Explore our Roadmap"
          subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          tag="ROADMAP"
          className={styles.section_head}
        />
        <Roadmap />
      </section>
      {/* CONTACT US */}
      <section id="contact-us" className={styles.contact_section}>
        <SectionHead
          title="Contact Us"
          subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting"
          tag="JOIN US"
          className={styles.section_head}
        />
        <ContactUs />
      </section>
    </main>
  );
}
