import React from "react";
import styles from "@/styles/movieAnimation.module.css";
import Draggable from "@/components/Draggable/Draggable";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

async function MoviePage() {
  return (
    <div className={styles.movieAnim}>
      <BreadCrumb title="Animations" />
      <div className={styles.bckg}></div>
      <div className={styles.drag}>
        <Draggable navigateTo={"/animations/"} />
      </div>
    </div>
  );
}

export default MoviePage;
