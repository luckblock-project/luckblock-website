import Badge from "@/components/badge";
import styles from "@/styles/page.module.scss";

export default function Home(): JSX.Element {
  return (
    <main className={styles.home_page}>
      <div className={styles.hero}>
        <div className={styles.hero_image}></div>
        <div className={styles.hero_content}>
          <Badge className={styles.hero_badge}>New Version Launched</Badge>
        </div>
      </div>
    </main>
  );
}
