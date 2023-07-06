import styles from "@/styles/solutions.module.scss";
import Image from "next/image";
import Link from "next/link";
import { UnderlineText } from "../underlineText";

export function Solutions(): JSX.Element {
  const solutions = [
    {
      title: "Empowering Intelligent Decision-Making with",
      underline: "Token Analyzer",
      content:
        "With $ROVER's cutting-edge Token Analyzer, gain unparalleled insights into the blockchain ecosystem. Seamlessly navigate through the complexities of the digital world and effortlessly analyze token trends, market dynamics, and investment opportunities. Leverage real-time data and advanced analytics to make informed decisions and staying ahead of the curve.",
      link: "/",
      img: "/token_analyzer.png",
    },
    {
      title: "Elevating Trust and Integrity",
      underline: "AI Auditor: ",
      content:
        "Harnessing the power of artificial intelligence, our innovative auditor eliminates human error and enhances the reliability of blockchain operations. From smart contract audits to transaction verification, $ROVER's AI Auditor guarantees the utmost security and trust",
      link: "/",
      img: "/ai_auditor.png",
    },
    {
      title: "Unleashing Developer Ingenuity",
      underline: "SDKs & API Access: ",
      content:
        "$ROVER's robust Software Development Kits (SDKs) and API Access open up a world of possibilities for developers. Seamlessly integrate blockchain technology into your applications, products, or services with ease, leveraging $ROVER's powerful tools and extensive resources.",
      link: "/",
      img: "/sdk_api.png",
    },
  ];

  return (
    <div className={styles.solutions}>
      <div className={styles.solution_row}>
        <Image
          className={styles.solution_image}
          src={solutions[0].img}
          alt={solutions[0].underline}
          width={400}
          height={460}
          quality={100}
        />
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
      <div className={styles.solution_row}>
        <Image
          className={styles.solution_image}
          src={solutions[1].img}
          alt={solutions[1].underline}
          width={400}
          height={460}
          quality={100}
        />
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
      <div className={styles.solution_row}>
        <Image
          className={styles.solution_image}
          src={solutions[2].img}
          alt={solutions[2].underline}
          width={400}
          height={460}
          quality={100}
        />
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
    </div>
  );
}
