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

export default function Home(): JSX.Element {
  return (
    <main className={styles.home_page}>
      <section id="home" className={styles.hero}>
        <div className={styles.hero_image}></div>
        <div className={styles.hero_content}>
          <Badge className={styles.hero_badge}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.15275 3.55559C8.20368 3.65925 8.23732 3.77027 8.25239 3.8844L8.53082 8.02432V8.02432L8.66903 10.1051C8.67046 10.3191 8.70403 10.5317 8.76867 10.7361C8.9356 11.1326 9.33716 11.3846 9.77405 11.3671L16.4313 10.9316C16.7196 10.9269 16.998 11.0347 17.2052 11.2313C17.3779 11.3952 17.4894 11.6096 17.5246 11.8402L17.5364 11.9802C17.2609 15.795 14.4592 18.9767 10.6524 19.7981C6.84555 20.6194 2.94186 18.8844 1.06071 15.535C0.518387 14.5619 0.17965 13.4923 0.0643819 12.389C0.0162286 12.0624 -0.00497452 11.7326 0.000979226 11.4026C-0.00496595 7.31279 2.90747 3.77702 6.98433 2.92463C7.47501 2.84822 7.95603 3.10798 8.15275 3.55559Z"
                fill="#61CC00"
              />
              <path
                opacity="0.4"
                d="M10.87 0.000819186C15.4299 0.116827 19.2623 3.39579 20 7.81229L19.993 7.84488V7.84488L19.9728 7.89227L19.9756 8.02236C19.9652 8.19471 19.8986 8.36054 19.784 8.49448C19.6645 8.63401 19.5013 8.72903 19.3216 8.76591L19.212 8.78095L11.5312 9.27861C11.2757 9.3038 11.0213 9.22142 10.8314 9.05195C10.673 8.91073 10.5718 8.72009 10.5432 8.51468L10.0277 0.845062C10.0187 0.819129 10.0187 0.791015 10.0277 0.765082C10.0347 0.553672 10.1278 0.35384 10.2861 0.21023C10.4443 0.0666198 10.6547 -0.00880037 10.87 0.000819186Z"
                fill="#61CC00"
              />
            </svg>
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
              Get Started <AngleRightIcon />
            </Link>
            <Link className={styles.hero_btn} href="/">
              <PlayIcon /> See how it works
            </Link>
          </div>
        </div>
      </section>
      <section id="solutions">
        <SectionHead
          title="Our Solutions"
          subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"
          className={styles.section_head}
        />
        <Solutions />
      </section>
      <section id="rover" className={styles.token_section}>
        <SectionHead
          title="Our Token"
          subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"
          className={styles.section_head}
        />
        <OurToken />
      </section>
      <section id="roadmap" className={styles.roadmap_section}>
        <SectionHead
          title="Explore our Roadmap"
          subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          tag="ROADMAP"
          className={styles.section_head}
        />
        <Roadmap />
      </section>
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
