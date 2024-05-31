import React from "react";
import styles from "@/styles/footer.module.css";
import Image from "next/image";
import footerImg from "../../../public/assets/images/footerimg.png";
import insta from "../../../public/assets/images/a.fa-instagram.png";
import twit from "../../../public/assets/images/a.fa-twitter.png";
import fb from "../../../public/assets/images/a.fa-facebook.png";
import linkedin from "../../../public/assets/images/a.fa-linkedin.png";
import phone from "../../../public/assets/images/div.icon-styled (1).png";
import time from "../../../public/assets/images/div.icon-styled (2).png";
import mail from "../../../public/assets/images/div.icon-styled (3).png";
import loc from "../../../public/assets/images/div.icon-styled.png";

const Footer = () => {
 
  return (
    <div>
       
      <div className={styles.contactMap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.76853012154!2d49.690149090376366!3d40.39473700796155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrw7w!5e0!3m2!1str!2saz!4v1712146774703!5m2!1str!2saz"
          width={"100%"}
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={styles.footer}>
      <div className={styles.desktopFooter}>
          <h1>Magic Image Co.,LTD.</h1>
          <p>info@mico.com</p>
          <span>800 123 4567</span>
          <span>2024 MAGIC IMAGE Co., Ltd</span>
      </div>
        <div className={styles.footerLeft}>
          <div>
            <Image src={footerImg} width={100} height={100} alt="" />
          </div>
          <div className={styles.footerLeftText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elitsed
              eiusmod tempor incididunt ut labordolore magna aliqua eniminim
            </p>
            <ul>
              <li>
                <Image src={insta} width={30} height={30} alt="" />
              </li>
              <li>
                <Image src={twit} width={30} height={30} alt="" />
              </li>
              <li>
                <Image src={linkedin} width={30} height={30} alt="" />
              </li>
              <li>
                <Image src={fb} width={30} height={30} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerRightOne}>
            <div className={styles.footerRightEl}>
              <div>
                <Image src={phone} width={30} height={30} alt="" />
              </div>
              <div>
                <p>800 123 4567</p>
              </div>
            </div>
            <div className={styles.footerRightEl}>
              <div>
                <Image src={loc} width={30} height={30} alt="" />
              </div>
              <div>
                <p>Korea Seoul NY 10016</p>
              </div>
            </div>
          </div>
          <div className={styles.footerRightTwo}>
            <div className={styles.footerRightEl}>
              <div>
                <Image src={time} width={30} height={30} alt="" />
              </div>
              <div>
                <p>info@mico.com</p>
              </div>
            </div>
            <div className={styles.footerRightEl}>
              <div>
                <Image src={mail} width={30} height={30} alt="" />
              </div>
              <div>
                <p>Mo-Fri: 8am - 6pm Sat: 10am - 4pm Sun: of</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Footer;
