"use client";
import React, {useMemo, useRef, useState } from "react";
import { Pagination } from "react-bootstrap";
import ReactPageScroller from "react-page-scroller";
import BrandSection from "../BrandSection/BrandSection";
import styles from "@/styles/home.module.css";
import StickHeader from "../StickHeader/StickHeader";
import SpiritSection from "../SpiritSection/SpiritSection";
import WhatWeDoSection from "../WhatWeDoSection/WhatWeDoSection";
import MovieSection from "../MovieSection/MovieSection";
import PartnerSection from "../PartnerSection/PartnerSection";
import ContactSection from "../ContactSection/ContactSection";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [selected, setSelected] = useState<number | null>(null);
  const goToPage = (number : number) => {
    setCurrentPage(number);
    setSelected(number);
  };
  const pageOnChange = (number: number) => {
    setCurrentPage(number);
    setSelected(number);
    
  };
  const getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 7; i++) {
      pageNumbers.push(
        <Pagination.Item
          activeLabel=""
          key={i}
          onClick={() => {
            setSelected(i-1);
            goToPage(i - 1);
          }}
          active={i === currentPage+1}
        >
           <span className={`${styles.curen} ${i - 1 === selected ? styles.activeClass : ''}`}>{i}</span>
          <span className={`${styles.point} ${i - 1 === selected ? styles.activePoint : ''}`}></span>
        </Pagination.Item>
      );
    }

    return pageNumbers;
  };

  const pagesNumbers = useMemo(() => {
    return getPagesNumbers();
  }, [currentPage]);
 
 const openMenu =()=>{
  setIsMenuOpen(prev=>!prev)
 }
  return (
    <>
      <div className={styles.blocks}>
        <StickHeader currentPage={currentPage} openMenu={openMenu}/>
        <Menu isMenuOpen={isMenuOpen} openMenu={openMenu}/>
        <ReactPageScroller
        animationTimer={700}
          customPageNumber={currentPage}   
          pageOnChange={pageOnChange}
        >
          <BrandSection />
          <SpiritSection/>
          <WhatWeDoSection/>
          <MovieSection/>
          <PartnerSection />
          <ContactSection/>
          <Footer />
        </ReactPageScroller>
        {!(currentPage <= 0 || currentPage === 6 )&& (
         <Pagination className={styles.chooseBlock}>{pagesNumbers}</Pagination>
        )}
      </div>
    </>
  );
};

export default Home;
