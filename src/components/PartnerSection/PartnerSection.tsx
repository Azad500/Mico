import React, { useEffect, useRef } from "react";
import styles from "@/styles/partner.module.css";
import { motion, useAnimate, useInView } from "framer-motion";
import data from "./partnerData";
import Image from "next/image";
const PartnerSection = () => {
  const [scope, animate] = useAnimate();
  const motionDiv = useRef(null);
  const isInView = useInView(motionDiv);
  useEffect(() => {
   

    if (isInView) {
      animate(
        `div.${styles.partnerLeft}`,
        { y: 0 },
        { duration: 0.8, ease: "easeInOut" }
      );
      animate(
        `div.${styles.movieRight}`,
        { y: 0 },
        { duration: 0.8, ease: "easeInOut" }
      );
    } else {
      animate(`div.${styles.partnerLeft}`, { y: -200 }, { duration: 0.8 });
      animate(
        `div.${styles.movieRight}`,
        { y: 200 },
        { duration: 0.8, ease: "easeInOut" }
      );
    }
    
  }, [isInView, animate]);

  return (
    <div className={styles.partner} ref={scope}>
      <motion.div className={styles.partnerLeft} ref={motionDiv}>
        <h1>PARTNERS</h1>
        <p>
          There are many media partners already with us. FLIXKO is ready to get together.
        </p>
      </motion.div>
      {/* <motion.div className={styles.partnerRight} ref={motionDiv} >
        <div>
          {data.slice(0, 6).map((partner) => (
            <div key={partner.id} className={styles.rightDiv}>
              <div>
                <Image
                  src={partner.image}
                  alt={"partner"}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.twoDiv}>
          {data.slice(6, 11).map((partner) => (
            <div key={partner.id} className={styles.rightDiv}>
              <div>
                <Image
                  src={partner.image}
                  alt={"partner"}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.threeDiv}>
          {data.slice(11, 16).map((partner) => (
            <div key={partner.id} className={styles.rightDiv}>
              <div>
                <Image
                  src={partner.image}
                  alt={"partner"}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div> */}

      <motion.div className={styles.movieRight} ref={motionDiv}>
        <div className={styles.korean}>KOREAN</div>
        <div className={styles.foreign}>FOREIGN</div>
      </motion.div>
    </div>
  );
};

export default PartnerSection;
