"use client";

import styles from "@/styles/sectionHead.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 600,
      once: true,
    });
  });

  return (
    <div data-aos="fade-up" className={`${styles.section_head} ${className}`}>
      {tag && <strong>{tag}</strong>}
      <h2>{title}</h2>
      {subTitle && <p>{subTitle}</p>}
    </div>
  );
}
