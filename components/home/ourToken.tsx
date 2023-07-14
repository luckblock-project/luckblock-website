import styles from "@/styles/ourToken.module.scss";
import Image from "next/image";
import TokenGlowImage from "../../public/token-glow.png";
import TokenImage from "../../public/token.png";
import { TickIcon } from "../icons";
import { UnderlineText } from "../underlineText";
import CertikImage from "../../public/certik.svg"

export function OurToken(): JSX.Element {
  return (
    <div className={styles.our_token}>
      <div className={styles.content}>
        <h3>
          New generation <UnderlineText text="$ROVER" />
        </h3>
        <p>
          $ROVER is an erc20 utility token that provides investors access to our suite of tools. 100% of the token revenue goes directly to buying and burning $ROVER. Issue InTen&apos;s smart company cards with individual spending limits. Your team can buy what they need, while we sort the paperwork automatically.
        </p>
        <div className={styles.token_features}>
          <span className={styles.feature}>
            <TickIcon />
            <span>ROVER AI Access</span>
          </span>
          <span className={styles.feature}>
            <TickIcon />
            <span>Farming</span>
          </span>
          <span className={styles.feature}>
            <TickIcon />
            <span>API Access</span>
          </span>
          <span className={styles.feature}>
            <TickIcon />
            <span>Liquidity Providing</span>
          </span>
          <span className={styles.feature}>
            <TickIcon />
            <span>Staking</span>
          </span>
          <span className={styles.feature}>
            <TickIcon />
            <span>DAO & Governance</span>
          </span>
        </div>
        <div className={styles.token_stats}>
          <Image
            src={CertikImage}
            alt="CERTIK"
          />
          <div className={styles.beacon}/>
          {/* <hr />
          <div className={styles.stat}>
            <ExpanceIcon />
            <span>0x9c330573849533234634</span>
            <CopyIcon />
          </div>
          <hr />
          <div className={styles.stat}>
            <EthereumIcon />
            <span>0x9c330573849533234634</span>
            <CopyIcon />
          </div> */}
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src={TokenImage}
          alt="$ROVER Token"
          className={styles.image_token}
        />
        <Image
          src={TokenGlowImage}
          alt="Token Glow"
          className={styles.image_glow} />
      </div>
    </div>
  );
}
