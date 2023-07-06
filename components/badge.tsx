import styles from "@/styles/badge.module.scss";

export default function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className: string;
}): JSX.Element {
  return <span className={`${styles.badge} ${className}`}>{children}</span>;
}
