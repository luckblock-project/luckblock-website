import styles from "@/styles/solutions.module.scss";
import Image from "next/image";
import Link from "next/link";
import { UnderlineText } from "../underlineText";
import TokenAnalyzerImage from "../../public/token_analyzer.jpeg";
import AiAuditorImage from "../../public/ai_auditor.jpeg";
import SdkApiImage from "../../public/sdk_api.jpeg";
import DeFiSniperImage from "../../public/defi_sniper.jpeg";

export function Solutions(): JSX.Element {
  const solutions = [
    {
      title: "Empowering Intelligent Decision-Making with",
      underline: "Token Analyzer",
      content:
        "Our token analyzer provides all the info you need to know before aping your next token. Pricing details, contract security, team + marketing data; proprietary holder distro, twitter & community scores and more.",
      link: "/",
      img: TokenAnalyzerImage,
    },
    {
      title: "Elevating Trust and Integrity",
      underline: "AI Auditor: ",
      content:
        "Can't afford to fail at launch? Our Ai auditor will conduct a full analysis of your smart contract, provide exact solutions to bug/logic issues, provide optimization suggestions & export all findings to a personalized PDF.",
      link: "/",
      img: AiAuditorImage,
    },
    {
      title: "Unleashing Developer Ingenuity",
      underline: "SDKs & API Access: ",
      content:
        "$ROVER's robust Software Development Kits (SDKs) and API Access open up a world of possibilities for developers. Seamlessly integrate blockchain technology into your applications, products, or services with ease, leveraging $ROVER's powerful tools and extensive resources.",
      link: "/",
      img: SdkApiImage,
    },
    {
      title: "DeFi ",
      underline: "Sniper Bot",
      content:
        "$ROVER's robust Software Development Kits (SDKs) and API Access open up a world of possibilities for developers. Seamlessly integrate blockchain technology into your applications, products, or services with ease, leveraging $ROVER's powerful tools and extensive resources.",
      link: "/",
      img: DeFiSniperImage,
    },
  ];

  return (
    <div className={styles.solutions}>
      {/* Token Analyzer */}
      <div className={styles.solution_row}>
        <div className={styles.solution_image_container}>
          <Image
            className={styles.solution_image}
            src={solutions[0].img}
            alt={solutions[0].underline}
          />
        </div>
        <div className={styles.solution_content}>
          <h3>
            {solutions[0].title}{" "}
            <UnderlineText
              className={styles.solution_underline_text}
              text={solutions[0].underline}
            />
          </h3>
          <p>{solutions[0].content}</p>
          <Link href={solutions[0].link}>Learn More</Link>
        </div>
      </div>
      {/* AI Audit */}
      <div className={styles.solution_row}>
        <div className={styles.solution_image_container}>
          <Image
            className={styles.solution_image}
            src={solutions[1].img}
            alt={solutions[1].underline}
          />
        </div>
        <div className={styles.solution_content}>
          <h3>
            <UnderlineText
              className={styles.solution_underline_text}
              text={solutions[1].underline}
            />
            {solutions[1].title}
          </h3>
          <p>{solutions[1].content}</p>
          <Link href={solutions[1].link}>Learn More</Link>
        </div>
      </div>
      {/* SDKs & APIs */}
      <div className={styles.solution_row}>
        <div className={styles.solution_image_container}>
          <Image
            className={styles.solution_image}
            src={solutions[2].img}
            alt={solutions[2].underline}
          />
        </div>
        <div className={styles.solution_content}>
          <h3>
            <UnderlineText
              className={styles.solution_underline_text}
              text={solutions[2].underline}
            />
            {solutions[2].title}
          </h3>
          <p>{solutions[2].content}</p>
          <Link href={solutions[2].link}>Learn More</Link>
        </div>
      </div>
      {/* Sniper Bot */}
      <div className={styles.solution_row}>
        <div className={styles.solution_image_container}>
          <Image
            className={styles.solution_image}
            src={solutions[3].img}
            alt={solutions[3].underline}
          />
        </div>
        <div className={styles.solution_content}>
          <h3>
            {solutions[3].title}
            <UnderlineText
              className={styles.solution_underline_text}
              text={solutions[3].underline}
            />
          </h3>
          <p>{solutions[3].content}</p>
          <Link href={solutions[3].link}>Learn More</Link>
        </div>
      </div>
    </div>
  );
}
