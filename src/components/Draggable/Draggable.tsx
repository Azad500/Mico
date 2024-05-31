"use client";

import React from "react";
import movieData from "../MovieSection/movieData";
import Image from "next/image";
import styles from "@/styles/draggable.module.css";
import Link from "next/link";
interface DragProps {
  navigateTo: string;
}
const Draggable = ({ navigateTo }: DragProps) => {
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    isDown = true;
    const slider = e.currentTarget;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    isDown = false;
    const slider = e.currentTarget;
    slider.classList.remove("active");
  };

  const handleMouseUp = () => {
    isDown = false;
    document.querySelector(".items")?.classList.remove("active");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDown) return;
    e.preventDefault();
    const slider = e.currentTarget;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  };

  const filteredMovies = movieData.filter(
    (movie) => movie.id >= 1 && movie.id <= 26
  );

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div
          className={styles.items}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {filteredMovies?.map((movie, index) => (
            <div className={`${styles.item} item${index + 1}`} key={movie.id}>
              <Link className={styles.cards} href={`${navigateTo}/${movie.id}`}>
                <Image
                  width={150}
                  height={250}
                  // className={`${index % 2 != 0 && styles.doubleIndex}`}
                  src={movie.image.src}
                  alt={movie.title}
                />
                <p>{movie.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Draggable;
