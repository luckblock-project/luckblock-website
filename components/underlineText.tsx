import styles from "@/styles/underlineText.module.scss";

export function UnderlineText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}): JSX.Element {
  return (
    <span className={`${styles.underline} ${className}`}>
      {text}
      <svg
        width="181"
        height="10"
        viewBox="0 0 181 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 8C14.6233 3.47226 67.6958 -2.86658 179 8"
          stroke="#61CC00"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
