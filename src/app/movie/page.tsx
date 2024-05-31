import React from "react";
import styles from "@/styles/detailAnimationmovie.module.css";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import MovieDraggableComponent from "@/components/MovieDraggableComponent/MovieDraggableComponent";

async function MoviePage() {
  return (
    <div className={styles.movieAnim}>
      <BreadCrumb title="Movie" />
      <div className={styles.bckg}></div>
      <MovieDraggableComponent />
    </div>
  );
}

export default MoviePage;
