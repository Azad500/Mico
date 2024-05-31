import React from "react";
import styles from "./video.module.css";
const VideoPlayer = () => {
  return (
    <div className={styles["main_section_video"]}>
      <video className={styles["hidden-controls"]} autoPlay  muted >
        <source src={'/assets/videos/main_2.mp4'} type="video/mp4" />
      </video>
    </div>
  );
};
export default VideoPlayer;
