import React, { useEffect, useRef } from "react";
import styles from "@/styles/movie.module.css";
import { motion, useAnimate, useInView } from "framer-motion";
import Draggable from "../Draggable/Draggable";
import Link from "next/link";

const MovieSection = () => {
  const [scope, animate] = useAnimate();
  const motionDiv = useRef(null);
  const isInView = useInView(motionDiv);
  useEffect(() => {
    if (isInView) {
      animate(
        `div.${styles.text}`,
        { y: 0 },
        { duration: 0.8, ease: "easeInOut" }
      );
      animate(
        `div.${styles.bottomDiv}`,
        { y: 0 },
        { duration: 0.8, ease: "easeInOut" }
      );
    } else {
      animate(`div.${styles.text}`, { y: -100 }, { duration: 0.8 });
      animate(`div.${styles.bottomDiv}`, { y: 100 }, { duration: 0.8 });
    }
  }, [isInView, animate]);
  return (
    <div className={styles.movie} ref={scope} id="movieSection">
      <div className={styles.bckg + " " + styles.typeB}></div>
      <motion.div className={styles.text}>
        <div ref={motionDiv}>
          <h1 className={styles.title}>
            <span>
              THE ANIMATION MOVIE & <p className={styles.mobileSpan}>SERIES</p>
            </span>
            <span className={styles.seriesSpan}>SERIES</span>
          </h1>
        </div>
        {/* <div className={styles.bottomTitle}>
          <p>& SERIES</p>
        </div> */}
      </motion.div>

      <motion.div className={styles.bottomDiv}>
        <Link href={`/animations`}>
          <div className={styles.animations}></div>
          <p className={styles.movieTitle}>ANIMATIONS</p>
        </Link>
        <Link href={`/series`}>
          <div className={styles.series}></div>
          <p className={styles.movieTitle}>SERIES</p>
        </Link>
        <Link href={`/movie`}>
          <div className={styles.movies}></div>
          <p className={styles.movieTitle}>MOVIE</p>
        </Link>
      </motion.div>
    </div>
  );
};

export default MovieSection;
