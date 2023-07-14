import ContactUs from "@/components/home/contactUs";
import Hero from "@/components/home/hero";
import { OurToken } from "@/components/home/ourToken";
import Roadmap from "@/components/home/roadmap";
import { Solutions } from "@/components/home/solutions";
import { SectionHead } from "@/components/sectionHead";
import styles from "@/styles/page.module.scss";

export default function Home(): JSX.Element {
  return (
    <main className={styles.home_page}>
      {/* HERO */}
      <Hero />
      {/* OUR SOLUTIONS */}
      <section id="solutions" className={styles.solutions}>
        <SectionHead
          title="Solutions"
          className={styles.section_head}
        />
        <Solutions />
      </section>
      {/* ROVER */}
      <section id="rover" className={styles.token_section}>
        <div className={styles.curvedSectionDiv} />
        <SectionHead
          title="$ROVER"
          subTitle="$ROVER is an erc20 utility token that provides investors access to our suite of tools. 100% of the token revenue goes directly to buying and burning $ROVER."
          className={styles.section_head}
        />
        <OurToken />
      </section>
      {/* ROADMAP */}
      <section id="roadmap" className={styles.roadmap_section}>
        <SectionHead
          title="Explore our Roadmap"
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
