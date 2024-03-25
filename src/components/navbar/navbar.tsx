"use client";

import { useRouter } from "next/navigation";
import styles from "./navbar.module.css";
import Image from "next/image";

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
      <Image
        className={styles.logo}
        src="/whitelogo2.png"
        alt="ToolBox Logo"
        width={300}
        height={50}
        onClick={handleLogoClick}
      />
      <Image
        className={styles.mobileLogo}
        src="/whitebulblogo1.png"
        alt="ToolBox Logo"
        width={28}
        height={40}
        onClick={handleLogoClick}
      />
      <div className={styles.about} onClick={() => handleAboutClick()}>
        ?
      </div>
    </div>
  );
}
