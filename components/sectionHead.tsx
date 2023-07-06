import styles from "@/styles/sectionHead.module.scss";

export function SectionHead({
  tag,
  title,
  subTitle = "",
  className = "",
}: {
  tag?: string;
  title: string;
  subTitle?: string;
  className?: string;
}): JSX.Element {
  return (
    <div className={`${styles.section_head} ${className}`}>
      {tag && <strong>{tag}</strong>}
      <h2>{title}</h2>
      {subTitle && <p>{subTitle}</p>}
    </div>
  );
}
