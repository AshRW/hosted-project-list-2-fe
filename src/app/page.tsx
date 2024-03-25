"use client";

import axios from "axios";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/configs/app.constants";
import { ProjectsType } from "@/types";
import { Akshar } from "next/font/google";
import { ProjectsListData } from "./data";
const optFont = Akshar({
  subsets: ["latin"],
  variable: "--cust-font",
  display: "swap",
});

export default function Home() {
  const [projectList, setProjectList] = useState<ProjectsType[]>([
    {
      id: 0,
      name: "Loading...",
      link: "",
      description: "Projects are loading, please hold for a minute.",
      sequenceNo: 0,
    },
  ]);

  // useEffect(() => {
  //   const getList = async () => {
  //     const response = await axios.get(`${BASE_URL}projects`);
  //     setProjectList([...response.data, ...response.data, ...response.data]);
  //   };
  //   getList();
  // }, []);

  useEffect(() => {
    setProjectList([...ProjectsListData]);
  }, []);

  function handleLinkButtonClick(link: string) {
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <div className={styles.container}>
      {projectList.map(({ name, id, description, link }, index) => (
        <div className={styles.card} key={id}>
          <div className={styles.cardName}>
            <span className={styles.cardNumber}> {`${index + 1}. `}</span>{" "}
            {`${name}`}
          </div>
          <div className={styles.cardDesc}>{description}</div>
          <div className={styles.cardLink}>
            <button
              onClick={() => handleLinkButtonClick(link)}
              className={styles.cardButton}
            >
              See Project
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
