import React from "react";
import styles from "@/styles/menu.module.css";
import Image from "next/image";
import logo from "../../../public/assets/images/Layer_1.png";

const Menu = ({ isMenuOpen, openMenu }: any) => {
  return (
    <>
      {isMenuOpen && (
        <div className={styles.menuDiv}>
          <div className={styles.cancel} onClick={openMenu}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 19L18.91 1M19 19L1.09 1"
                stroke="#D02127"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className={styles.navBar}>
            <Image src={logo} width={50} height={50} alt="" />
            <ul>
              <li>ABOUT </li>
              <li>BUSINESS</li>
              <li>CONTENTS</li>
              <li>PARTNERS</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
