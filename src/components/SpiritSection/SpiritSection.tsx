import React, { useEffect, useRef } from "react";
import styles from "@/styles/spirit.module.css";
import { motion, useAnimate, useInView } from "framer-motion";

const SpiritSection = () => {
  const [scope, animate] = useAnimate();
  const motionDiv = useRef(null);
  const isInView = useInView(motionDiv);

  useEffect(() => {
    if (isInView) {
      animate(
        `div.${styles.upText}`,
        { y: 0 },
        { duration: 0.8, ease: "easeInOut" }
      );
      animate(
        `div.${styles.bottomText}`,
        { y: 0 },
        { duration: 0.8, ease: "easeInOut" }
      );
    } else {
      animate(`div.${styles.upText}`, { y: -100 }, { duration: 0.8 });
      animate(`div.${styles.bottomText}`, { y: 100 }, { duration: 0.8 });
    }
  }, [isInView, animate]);

  return (
    <div className={styles.spiritSection} ref={scope}>
    <div></div>
      <div className={styles.upText} ref={motionDiv}>
      <p className={styles.aboutMagicOne}>ABOUT Magic Image Co.,Ltd. </p>

        <motion.div>
          <span className={styles.oneSpan}>I. Company : Magic Image Co.,LTD.</span>
          <br/>
          <span>
            II. Production personnel : 130 employee (Technical /technical
            service /office job )
          </span>
        </motion.div>
      </div>
      <motion.div className={styles.animFor}>
        <div className={styles.bottomText}>
          <p className={styles.aboutMagic}>ABOUT Magic Image Co.,Ltd. </p>
          <span>
            MICO operates a business in the areas of production, distribution,
            management, and exportation of animated visuals through 2D, 3D, CG,
            CGI, Flash Animation, and internet.
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default SpiritSection;
