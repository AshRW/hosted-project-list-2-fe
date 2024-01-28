"use client";

import axios from "axios";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/configs/app.constants";
import { ProjectsType } from "@/types";

export default function Home() {
  const [projectList, setProjectList] = useState<ProjectsType[]>([
    {
      id: 1,
      name: "Projects Loading",
      link: "",
      description: "",
      sequenceNo: 1,
    },
  ]);

  useEffect(() => {
    const getList = async () => {
      const response = await axios.get(`${BASE_URL}projects`);
      setProjectList(response.data);
    };
    getList();
  }, []);

  return (
    <div className={styles.container}>
      {projectList.map(({ name, id, description, link }, index) => (
        <div className={styles.card} key={id}>
          <div className={styles.cardName}>{`${index + 1}. ${name}`}</div>
          <div className={styles.cardDesc}>{description}</div>
          <div className={styles.cardLink}>
            <button className={styles.cardButton}>LINK</button>
          </div>
        </div>
      ))}
    </div>
  );
}
