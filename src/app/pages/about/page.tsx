"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function AboutPage() {
  const router = useRouter();
  function handleLogin() {
    router.replace("login");
  }

  function handleLinkClick() {
    window.open("https://github.com/AshRW", "_blank", "noopener,noreferrer");
  }
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardTitle}>About this website 🤔</div>
        <div className={styles.cardDesc}>
          This WebApp is made using NextJs and is server side rendered. I made this website as a single place to list and showcase all my projects that are deployed. Earlier, I had a similar webapp too, that was the predecessor to this WebApp. Thats listed in the list of my projects too!
        </div>
        <div className={styles.cardLink} onClick={handleLinkClick}>
          My GitHub
        </div>
      </div>
    </div>
  );
}
