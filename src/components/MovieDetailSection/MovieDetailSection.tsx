import React from "react";
import styles from "@/styles/moviedetailsection.module.css";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import data from "../../components/MovieSection/movieData";
import Image from "next/image";
interface MovieDetailSectionProps {
  title: string;
}

const MovieDetailSection: React.FC<MovieDetailSectionProps> = ({ title }) => {
  return (
    <div className={styles.movieDetail}>
      <BreadCrumb title={title} />
      <div className={styles.bckg}></div>

      <div className={styles.movieElement}>
        <div className={styles.scrollEL}>
          {data?.map((el) => {
            return (
              <div className={styles.movieElementDiv}>
                <Image src={el.image} alt="" width={155} height={226} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailSection;
