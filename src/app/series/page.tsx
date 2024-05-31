import React from "react";
import styles from "@/styles/movieAnimation.module.css";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import SeriesDraggable from "@/components/SeriesDraggableComponent/seriesDraggableComponent";

async function MoviePage() {
  return (
    <div className={styles.movieAnim}>
      <BreadCrumb title="Series" />
      <div className={styles.bckg}></div>
      <div className={styles.drag}>
        <SeriesDraggable navigateTo={"/series/"} />
      </div>
    </div>
  );
}

export default MoviePage;
