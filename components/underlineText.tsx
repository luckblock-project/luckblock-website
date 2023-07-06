import styles from "@/styles/underlineText.module.scss";

export function UnderlineText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}): JSX.Element {
  return (
    <span className={`${styles.underline} ${className}`}>{text}</span>
  );
}