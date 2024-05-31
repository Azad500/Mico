import React from "react";
import MovieDetailSection from "@/components/MovieDetailSection/MovieDetailSection";
import movieData from "@/components/MovieSection/movieData";
import styles from "@/styles/movieDetail.module.css";
import GoBack from "@/components/GoBack/GoBack";
import Image from "next/image";

interface MovieDetailProps {
  params: {
    id: string;
  };
}

async function MovieDetail({ params }: MovieDetailProps) {
  const { id } = params;
  const currentItem = movieData.find((item) => item.id === +id);

  if (!currentItem || !currentItem.image) {
    return null;
  }
  return (
    <div className={styles.movieDetail}>
      <GoBack />
      <div className={styles.movieDetailElement}>
        <div className={styles.movieDetailLeft}>
          <Image src={currentItem?.image} width={250} height={300} alt="" />
        </div>
        <div className={styles.movieDetailRight}>
          <h1>{currentItem?.title}</h1>
          <div className={styles.movieDetailRightDetail}>
            <div className={styles.movieDetailRightEl}>
              <p>Genre:</p>
              <p>{currentItem?.genre}</p>
            </div>
            <div className={styles.movieDetailRightEl}>
              {currentItem?.format ? (
                <>
                  <p>Format:</p>
                  <p>{currentItem.format}</p>
                </>
              ) : null}
            </div>
            <div className={styles.movieDetailRightEl}>
              <p>Number Of Episodes:</p>
              <p>{currentItem?.numberOfEpisod}</p>
            </div>
            <div className={styles.movieDetailRightEl}>
              <p>Air Dated:</p>
              <p>{currentItem?.airDated}</p>
            </div>
            <div className={styles.movieDetailRightEl}>
              {currentItem?.type ? (
                <>
                  <p>Type:</p>
                  <p>{currentItem?.type}</p>
                </>
              ) : null}
            </div>
            <div className={styles.movieDetailRightEl}>
              {currentItem?.productionType ? (
                <>
                  <p> Production Type:</p>
                  <p>{currentItem?.productionType}</p>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.descriptionElement}>
        <p>{currentItem?.description}</p>
        <p>{currentItem?.lastText}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
