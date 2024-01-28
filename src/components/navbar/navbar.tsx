"use client";

import { useRouter } from "next/navigation";
import styles from "./navbar.module.css";

export default function NavBar() {
  const router = useRouter();

  function handleAboutClick() {
    router.push("pages/about");
  }

  function handleLogoClick() {
    router.replace("/");
  }

  return (
    <div className={styles.nav}>
      <div className={styles.logo} onClick={() => handleLogoClick()}>
        LOGO
      </div>
      <div onClick={() => handleAboutClick()}>?</div>
    </div>
  );
}
