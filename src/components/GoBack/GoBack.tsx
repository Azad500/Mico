"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";
import React from "react";
import cancelIcon from "../../../public/assets/images/cancel.png";
import styles from "@/styles/goback.module.css";
const GoBack = () => {
  const router = useRouter();

  return (
    <div className={styles.cancelIcon} onClick={() => router.back()}>
      <Image className={styles.backIcon} src={cancelIcon} width={40} height={40} alt="" />
    </div>
  );
};

export default GoBack;
