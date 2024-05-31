import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/whatwedo.module.css";
import { motion, useAnimate, useInView } from "framer-motion";
import one from "../../../public/assets/images/Vector (1).png";
import two from "../../../public/assets/images/Vector (2).png";
import three from "../../../public/assets/images/Vector (3).png";
import four from "../../../public/assets/images/Vector (4).png";
import Image from "next/image";

const WhatWeDoSection = () => {
  const [scope, animate] = useAnimate();
  const motionDiv = useRef(null);
  const isInView = useInView(motionDiv);

  useEffect(() => {
    if (isInView) {
      animate(
        `div.${styles.title}`,
        { y: 0 },
        { duration: 0.8, ease: "easeInOut" }
      );
      animate(
        `div.${styles.makeDivOne}`,
        { y: 0, opacity: 1 },
        { duration: 0.8, ease: "easeInOut" }
      );
      animate(
        `div.${styles.makeDivTwo}`,
        { y: 0, opacity: 1 },
        { duration: 1, ease: "easeInOut" }
      );
      animate(
        `div.${styles.makeDivThree}`,
        { y: 0, opacity: 1 },
        { duration: 1.2, ease: "easeInOut" }
      );
      animate(
        `div.${styles.makeDivFour}`,
        { y: 0, opacity: 1 },
        { duration: 1.2, ease: "easeInOut" }
      );
    } else {
      animate(`div.${styles.title}`, { y: 100 }, { duration: 1 });
      animate(
        `div.${styles.makeDivOne}`,
        { y: 150, opacity: 0 },
        { duration: 0 }
      );
      animate(
        `div.${styles.makeDivTwo}`,
        { y: 150, opacity: 0 },
        { duration: 0 , delay:0.5}
      );
      animate(
        `div.${styles.makeDivThree}`,
        { y: 150, opacity: 0 },
        { duration: 0,delay:0.8 }
      );
      animate(
        `div.${styles.makeDivFour}`,
        { y: 150, opacity: 0 },
        { duration: 0,delay:1 }
      );
    }
  }, [isInView, animate]);

  return (
    <div className={styles.whatwedo} ref={scope}>
      <div className={styles.bckg + " " + styles.typeB} ref={motionDiv}></div>
      <motion.div className={styles.title} ref={motionDiv}>
        <div>WHAT WE DO</div>
      </motion.div>
      <div className={styles.makeDiv}>
        <motion.div className={styles.makeDivOneEL}>
          <motion.div className={styles.makeDivOne} ref={motionDiv}>
            <Image
              src={one}
              width={100}
              height={100}
              alt="Picture of the author"
            />
            <p>
              Discover and import movies and videos from different countries
              around the world
            </p>
          </motion.div>
        </motion.div>
        <motion.div className={styles.makeDivTwoEL}>
          <motion.div className={styles.makeDivTwo} ref={motionDiv}>
            <Image
              src={three}
              width={100}
              height={100}
              alt="Picture of the author"
            />
            <p>
              Publish and distribute media of various genres to all channels
            </p>
          </motion.div>
        </motion.div>
        <motion.div className={styles.makeDivThreeEL}>
          <motion.div className={styles.makeDivThree} ref={motionDiv}>
            <Image
              src={two}
              width={100}
              height={100}
              alt="Picture of the author"
            />
            <p>Film production, video editing, design, and marketing</p>
          </motion.div>
        </motion.div>
        <motion.div className={styles.makeDivFourEL}>
          <motion.div className={styles.makeDivFour} ref={motionDiv}>
            <Image
              src={four}
              width={100}
              height={100}
              alt="Picture of the author"
            />
            <p>Film production, video editing, design, and marketing</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
