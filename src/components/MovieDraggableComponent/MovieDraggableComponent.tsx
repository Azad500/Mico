"use client";

import React from "react";
import styles from "@/styles/detailAnimationmovie.module.css";
import movieData from "../MovieSection/movieData";
import Link from "next/link";
import Image from "next/image";

const MovieDraggableComponent = () => {
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
  const filteredMovies = movieData.filter((movie) => movie.id >= 46);
  return (
    <div>
      <main className={styles.main}>
        <div
          className={styles.items}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {filteredMovies?.map((movie, index) => (
            <Link href={`/movie/${movie.id}`}>
              <div className={styles.sliderDivEl}>
                <Image
                  width={150}
                  height={250}
                  className={styles.sliderDivElCircle}
                  src={movie.image.src}
                  alt={movie.title}
                />
                <p>{movie.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MovieDraggableComponent;
