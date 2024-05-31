import React, { useEffect, useRef } from "react";
import styles from "@/styles/media.module.css";
import { motion, useAnimate, useInView } from "framer-motion";
import Image from "next/image";
import borderImg from "../../../public/assets/images/border.png";
import bottomImg from "../../../public/assets/images/main.png";
const MediaSection = () => {
  const [scope, animate] = useAnimate();
  const motionDiv = useRef(null);
  const isInView = useInView(motionDiv);

  useEffect(() => {
    if (isInView) {
      animate(
        `div.${styles.upImg}`,
        { y: 0, opacity: 1 },
        { duration: 0.8, ease: "easeInOut" }
      );
      animate(
        `div.${styles.bottomDiv}`,
        { y: 0 },
        { duration: 0.8, ease: "easeInOut" }
      );
      animate(
        `div.${styles.bottomText}`,
        { y: 0, opacity: 1 },
        { duration: 0.8, ease: "easeInOut", delay: 0.5 }
      );
    } else {
      animate(`div.${styles.upImg}`, { y: -100, opacity: 0 }, { duration: 1 });
      animate(`div.${styles.bottomDiv}`, { y: 200 }, { duration: 1 });
      animate(
        `div.${styles.bottomText}`,
        { y: 150, opacity: 0 },
        { duration: 0.8, ease: "easeInOut" }
      );
    }
  }, [isInView, animate]);
  return (
    <div className={styles.media} ref={scope}>
      <div className={styles.imgContainer}>
        
        <motion.div className={styles.upImg} ref={motionDiv}>
          <Image
            src={borderImg}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </motion.div>
        <motion.div className={styles.bottomImg} ref={motionDiv}>
          <motion.div className={styles.bottomDiv} >
            <Image
              src={bottomImg}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </motion.div>
        </motion.div>
        <motion.div className={styles.flowDiv}>
          <motion.div className={styles.bottomText} ref={motionDiv}>
            <p>
              1st GENERATION <br /> OF MEDIA CONTENTS DISTRIBUTION <br />
              BUSINESS
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MediaSection;
