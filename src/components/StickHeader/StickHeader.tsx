"use client";

import React, { MouseEventHandler, useEffect, useMemo, useState } from "react";
import styles from "@/styles/stickheader.module.css";
import Image from "next/image";
import logo from "../../../public/assets/images/Layer_1.png";
interface StickHeaderProps {
  currentPage: number;
  openMenu: MouseEventHandler<HTMLDivElement>;
}

const StickHeader: React.FC<StickHeaderProps> = ({ currentPage, openMenu }) => {
  return (
    <div
      className={`${styles.header} ${
        currentPage <= 0 || currentPage === 6 ? styles.hidden : ""
      }`}
    >
      {/* <h1 className={styles.headLogo}></h1> */}
      <Image src={logo} width={50} height={50} alt="" />
      <ul className={styles.ul}>
        <li>About</li>
        <li>Business</li>
        <li>Contents</li>
        <li>Partners</li>
        <li>Contacts</li>
      </ul>
      <div className={styles.menu} onClick={openMenu}>
        <svg
          width="43"
          height="29"
          viewBox="0 0 43 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.375 1.75H40.625M2.375 14.5H40.625M2.375 27.25H40.625"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default StickHeader;
