import React, { useEffect, useRef } from "react";
import styles from "@/styles/anim.module.css";
import { motion} from "framer-motion";
import bckg from "../../../public/assets/images/Rectangle 3.png";
import Image from "next/image";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const BrandSection = () => {

  return (
    <div className={styles.brand}>
      <VideoPlayer/>
      <div className={styles.bckg}>
        <Image src={bckg} width={1000} height={600} alt="" />
      </div>
      <div  className={styles.brandPage}>
        <div  className={styles.brandPageEl}>
          <div className={styles.mobileSvg}>
          <svg width="223" height="213" viewBox="0 0 223 213" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="192.463" cy="105.02" r="1.99769" transform="rotate(150 192.463 105.02)" fill="#D9D9D9"/>
<circle cx="152.514" cy="92.5607" r="4.79445" transform="rotate(150 152.514 92.5607)" fill="white"/>
<circle cx="125.753" cy="176.059" r="4.99422" transform="rotate(150 125.753 176.059)" fill="white"/>
<circle cx="146.971" cy="10.6427" r="7.79098" transform="rotate(150 146.971 10.6427)" fill="white"/>
<circle cx="90.9881" cy="120.239" r="2.79676" transform="rotate(150 90.9881 120.239)" fill="white"/>
<circle cx="69.0187" cy="77.7929" r="3.79561" transform="rotate(150 69.0187 77.7929)" fill="white"/>
<circle cx="33.7516" cy="137.369" r="3.79561" transform="rotate(150 33.7516 137.369)" fill="white"/>
</svg>

          </div>
          <div className={styles.leftImg}>
            <svg
              width="433"
              height="364"
              viewBox="0 0 433 364"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="39" cy="83" r="5" fill="#D9D9D9" />
              <circle cx="110" cy="160" r="12" fill="white" />
              <circle cx="272.5" cy="12.5" r="12.5" fill="white" />
              <circle cx="19.5" cy="344.5" r="19.5" fill="white" />
              <circle cx="278" cy="177" r="7" fill="white" />
              <circle cx="272.5" cy="296.5" r="9.5" fill="white" />
              <circle cx="423.5" cy="211.5" r="9.5" fill="white" />
            </svg>
          </div>
          <motion.div
            className={styles.logoImg}
            transition={{
              repeatType: "reverse",
              ease: "easeOut",
            }}
          >
            <svg
              width="280"
              height="236"
              viewBox="0 0 280 236"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_27_169)">
                <path
                  d="M118.893 167.335C119.675 167.335 120.309 166.702 120.309 165.922C120.309 165.142 119.675 164.51 118.893 164.51C118.111 164.51 117.477 165.142 117.477 165.922C117.477 166.702 118.111 167.335 118.893 167.335Z"
                  fill="#D02127"
                />
                <path
                  d="M112.529 167.331C113.309 167.331 113.945 166.7 113.945 165.918C113.945 165.137 113.313 164.506 112.529 164.506C111.745 164.506 111.113 165.137 111.113 165.918C111.113 166.7 111.745 167.331 112.529 167.331Z"
                  fill="#D02127"
                />
                <path
                  d="M112.398 170.072L111.523 170.374C112.08 171.969 113.547 172.96 115.309 172.96C115.397 172.96 115.488 172.96 115.576 172.952C117.326 172.853 118.726 171.798 119.056 170.322L118.153 170.12C117.875 171.354 116.634 171.969 115.524 172.028C114.351 172.111 112.935 171.611 112.398 170.068V170.072Z"
                  fill="#D02127"
                />
                <path
                  d="M250.936 36.4829H161.039L184.682 0H171.954L148.753 36.4829H137.357L114.152 0H101.44L125.086 36.4829H29.064C13.0822 36.4829 0 49.5113 0 65.4557V207.011C0 222.956 13.0822 236 29.064 236H250.932C266.918 236 279.996 222.952 279.996 207.011V65.4557C279.996 49.5113 266.914 36.4829 250.932 36.4829H250.936ZM220.205 91.9173C222.389 91.9173 224.163 93.6907 224.163 95.8647C224.163 98.0388 222.385 99.8121 220.205 99.8121C218.026 99.8121 216.248 98.0388 216.248 95.8647C216.248 93.6907 218.026 91.9173 220.205 91.9173ZM220.205 100.185C222.389 100.185 224.163 101.958 224.163 104.132C224.163 106.307 222.385 108.08 220.205 108.08C218.026 108.08 216.248 106.307 216.248 104.132C216.248 101.958 218.026 100.185 220.205 100.185ZM220.205 108.453C222.389 108.453 224.163 110.226 224.163 112.4C224.163 114.574 222.385 116.348 220.205 116.348C218.026 116.348 216.248 114.574 216.248 112.4C216.248 110.226 218.026 108.453 220.205 108.453ZM220.205 116.721C222.389 116.721 224.163 118.494 224.163 120.668C224.163 122.842 222.385 124.615 220.205 124.615C218.026 124.615 216.248 122.842 216.248 120.668C216.248 118.494 218.026 116.721 220.205 116.721ZM220.205 124.988C222.389 124.988 224.163 126.762 224.163 128.936C224.163 131.11 222.385 132.883 220.205 132.883C218.026 132.883 216.248 131.11 216.248 128.936C216.248 126.762 218.026 124.988 220.205 124.988ZM220.205 133.256C222.389 133.256 224.163 135.029 224.163 137.203C224.163 139.378 222.385 141.151 220.205 141.151C218.026 141.151 216.248 139.378 216.248 137.203C216.248 135.029 218.026 133.256 220.205 133.256ZM220.205 141.524C222.389 141.524 224.163 143.297 224.163 145.471C224.163 147.645 222.385 149.419 220.205 149.419C218.026 149.419 216.248 147.645 216.248 145.471C216.248 143.297 218.026 141.524 220.205 141.524ZM220.205 149.792C222.389 149.792 224.163 151.565 224.163 153.739C224.163 155.913 222.385 157.686 220.205 157.686C218.026 157.686 216.248 155.913 216.248 153.739C216.248 151.565 218.026 149.792 220.205 149.792ZM220.205 158.059C222.389 158.059 224.163 159.833 224.163 162.007C224.163 164.181 222.385 165.954 220.205 165.954C218.026 165.954 216.248 164.181 216.248 162.007C216.248 159.833 218.026 158.059 220.205 158.059ZM211.916 100.189C214.1 100.189 215.874 101.962 215.874 104.136C215.874 106.31 214.096 108.084 211.916 108.084C209.737 108.084 207.959 106.31 207.959 104.136C207.959 101.962 209.737 100.189 211.916 100.189ZM211.916 108.457C214.1 108.457 215.874 110.23 215.874 112.404C215.874 114.578 214.096 116.352 211.916 116.352C209.737 116.352 207.959 114.578 207.959 112.404C207.959 110.23 209.737 108.457 211.916 108.457ZM211.916 116.725C214.1 116.725 215.874 118.498 215.874 120.672C215.874 122.846 214.096 124.619 211.916 124.619C209.737 124.619 207.959 122.846 207.959 120.672C207.959 118.498 209.737 116.725 211.916 116.725ZM211.916 124.992C214.1 124.992 215.874 126.766 215.874 128.94C215.874 131.114 214.096 132.887 211.916 132.887C209.737 132.887 207.959 131.114 207.959 128.94C207.959 126.766 209.737 124.992 211.916 124.992ZM211.916 133.26C214.1 133.26 215.874 135.033 215.874 137.207C215.874 139.382 214.096 141.155 211.916 141.155C209.737 141.155 207.959 139.382 207.959 137.207C207.959 135.033 209.737 133.26 211.916 133.26ZM211.916 141.528C214.1 141.528 215.874 143.301 215.874 145.475C215.874 147.649 214.096 149.423 211.916 149.423C209.737 149.423 207.959 147.649 207.959 145.475C207.959 143.301 209.737 141.528 211.916 141.528ZM211.916 149.796C214.1 149.796 215.874 151.569 215.874 153.743C215.874 155.917 214.096 157.69 211.916 157.69C209.737 157.69 207.959 155.917 207.959 153.743C207.959 151.569 209.737 149.796 211.916 149.796ZM211.916 158.063C214.1 158.063 215.874 159.837 215.874 162.011C215.874 164.185 214.096 165.958 211.916 165.958C209.737 165.958 207.959 164.185 207.959 162.011C207.959 159.837 209.737 158.063 211.916 158.063ZM185.239 117.851C187.422 117.851 189.196 119.625 189.196 121.818C189.196 124.012 187.418 125.766 185.239 125.766C183.059 125.766 181.281 123.993 181.281 121.818C181.281 119.644 183.059 117.851 185.239 117.851ZM181.281 113.535C181.281 111.357 183.059 109.587 185.239 109.587C187.418 109.587 189.196 111.361 189.196 113.535C189.196 115.709 187.418 117.482 185.239 117.482C183.059 117.482 181.281 115.729 181.281 113.535ZM186.571 157.786C184.388 157.786 182.614 156.012 182.614 153.838C182.614 151.664 184.392 149.891 186.571 149.891C188.751 149.891 190.529 151.664 190.529 153.838C190.529 156.012 188.751 157.786 186.571 157.786ZM190.529 162.102C190.529 164.28 188.751 166.049 186.571 166.049C184.392 166.049 182.614 164.276 182.614 162.102C182.614 159.928 184.392 158.155 186.571 158.155C188.751 158.155 190.529 159.928 190.529 162.102ZM189.566 121.818C189.566 119.621 191.344 117.851 193.524 117.851C195.704 117.851 197.482 119.625 197.482 121.818C197.482 124.012 195.704 125.766 193.524 125.766C191.344 125.766 189.566 123.993 189.566 121.818ZM193.524 117.482C191.34 117.482 189.566 115.729 189.566 113.535C189.566 111.341 191.344 109.587 193.524 109.587C195.704 109.587 197.482 111.361 197.482 113.535C197.482 115.709 195.704 117.482 193.524 117.482ZM192.542 100.673C194.725 100.673 196.499 102.427 196.499 104.62C196.499 106.814 194.721 108.568 192.542 108.568C190.362 108.568 188.584 106.794 188.584 104.62C188.584 102.446 190.362 100.673 192.542 100.673ZM184.252 91.834C186.436 91.834 188.21 93.6073 188.21 95.7814C188.21 97.9554 186.432 99.7288 184.252 99.7288C182.073 99.7288 180.295 97.9554 180.295 95.7814C180.295 93.6073 182.073 91.834 184.252 91.834ZM184.252 100.859C186.436 100.859 188.21 102.613 188.21 104.807C188.21 107.001 186.432 108.754 184.252 108.754C182.073 108.754 180.295 106.981 180.295 104.807C180.295 102.633 182.073 100.859 184.252 100.859ZM175.963 92.0204C178.147 92.0204 179.921 93.7938 179.921 95.9679C179.921 98.1419 178.143 99.9153 175.963 99.9153C173.783 99.9153 172.005 98.1419 172.005 95.9679C172.005 93.7938 173.783 92.0204 175.963 92.0204ZM175.963 100.859C178.147 100.859 179.921 102.613 179.921 104.807C179.921 107.001 178.143 108.754 175.963 108.754C173.783 108.754 172.005 106.981 172.005 104.807C172.005 102.633 173.783 100.859 175.963 100.859ZM167.674 92.0204C169.858 92.0204 171.632 93.7938 171.632 95.9679C171.632 98.1419 169.854 99.9153 167.674 99.9153C165.494 99.9153 163.716 98.1419 163.716 95.9679C163.716 93.7938 165.494 92.0204 167.674 92.0204ZM167.674 100.768C169.858 100.768 171.632 102.522 171.632 104.716C171.632 106.91 169.854 108.663 167.674 108.663C165.494 108.663 163.716 106.89 163.716 104.716C163.716 102.542 165.494 100.768 167.674 100.768ZM163.346 95.8766C163.346 98.0546 161.568 99.824 159.389 99.824C157.209 99.824 155.431 98.0507 155.431 95.8766C155.431 93.7026 157.209 91.9292 159.389 91.9292C161.568 91.9292 163.346 93.7026 163.346 95.8766ZM159.389 157.694C157.205 157.694 155.431 155.921 155.431 153.747C155.431 151.573 157.209 149.8 159.389 149.8C161.568 149.8 163.346 151.573 163.346 153.747C163.346 155.921 161.568 157.694 159.389 157.694ZM163.346 162.011C163.346 164.189 161.568 165.958 159.389 165.958C157.209 165.958 155.431 164.185 155.431 162.011C155.431 159.837 157.209 158.063 159.389 158.063C161.568 158.063 163.346 159.837 163.346 162.011ZM159.389 149.427C157.205 149.427 155.431 147.653 155.431 145.479C155.431 143.305 157.209 141.532 159.389 141.532C161.568 141.532 163.346 143.305 163.346 145.479C163.346 147.653 161.568 149.427 159.389 149.427ZM159.389 141.159C157.205 141.159 155.431 139.385 155.431 137.211C155.431 135.037 157.209 133.264 159.389 133.264C161.568 133.264 163.346 135.037 163.346 137.211C163.346 139.385 161.568 141.159 159.389 141.159ZM159.389 132.891C157.205 132.891 155.431 131.118 155.431 128.944C155.431 126.77 157.209 124.996 159.389 124.996C161.568 124.996 163.346 126.77 163.346 128.944C163.346 131.118 161.568 132.891 159.389 132.891ZM159.389 124.623C157.205 124.623 155.431 122.85 155.431 120.676C155.431 118.502 157.209 116.729 159.389 116.729C161.568 116.729 163.346 118.502 163.346 120.676C163.346 122.85 161.568 124.623 159.389 124.623ZM159.389 116.356C157.205 116.356 155.431 114.582 155.431 112.408C155.431 110.234 157.209 108.461 159.389 108.461C161.568 108.461 163.346 110.234 163.346 112.408C163.346 114.582 161.568 116.356 159.389 116.356ZM159.389 108.088C157.205 108.088 155.431 106.314 155.431 104.14C155.431 101.966 157.209 100.193 159.389 100.193C161.568 100.193 163.346 101.966 163.346 104.14C163.346 106.314 161.568 108.088 159.389 108.088ZM26.5502 182.486C24.3466 182.486 22.5925 180.712 22.5925 178.538C22.5925 176.364 24.3506 174.591 26.5502 174.591C28.7498 174.591 30.5078 176.364 30.5078 178.538C30.5078 180.712 28.7299 182.486 26.5502 182.486ZM26.5502 174.218C24.3466 174.218 22.5925 172.445 22.5925 170.271C22.5925 168.096 24.3506 166.323 26.5502 166.323C28.7498 166.323 30.5078 168.096 30.5078 170.271C30.5078 172.445 28.7299 174.218 26.5502 174.218ZM26.5502 165.95C24.3466 165.95 22.5925 164.177 22.5925 162.003C22.5925 159.829 24.3506 158.055 26.5502 158.055C28.7498 158.055 30.5078 159.829 30.5078 162.003C30.5078 164.177 28.7299 165.95 26.5502 165.95ZM26.5502 157.682C24.3466 157.682 22.5925 155.909 22.5925 153.735C22.5925 151.561 24.3506 149.788 26.5502 149.788C28.7498 149.788 30.5078 151.561 30.5078 153.735C30.5078 155.909 28.7299 157.682 26.5502 157.682ZM26.5502 149.415C24.3466 149.415 22.5925 147.641 22.5925 145.467C22.5925 143.293 24.3506 141.52 26.5502 141.52C28.7498 141.52 30.5078 143.293 30.5078 145.467C30.5078 147.641 28.7299 149.415 26.5502 149.415ZM26.5502 141.147C24.3466 141.147 22.5925 139.374 22.5925 137.2C22.5925 135.025 24.3506 133.252 26.5502 133.252C28.7498 133.252 30.5078 135.025 30.5078 137.2C30.5078 139.374 28.7299 141.147 26.5502 141.147ZM26.5502 132.879C24.3466 132.879 22.5925 131.106 22.5925 128.932C22.5925 126.758 24.3506 124.984 26.5502 124.984C28.7498 124.984 30.5078 126.758 30.5078 128.932C30.5078 131.106 28.7299 132.879 26.5502 132.879ZM26.5502 124.611C24.3466 124.611 22.5925 122.838 22.5925 120.664C22.5925 118.49 24.3506 116.717 26.5502 116.717C28.7498 116.717 30.5078 118.49 30.5078 120.664C30.5078 122.838 28.7299 124.611 26.5502 124.611ZM26.5502 116.344C24.3466 116.344 22.5925 114.57 22.5925 112.396C22.5925 110.222 24.3506 108.449 26.5502 108.449C28.7498 108.449 30.5078 110.222 30.5078 112.396C30.5078 114.57 28.7299 116.344 26.5502 116.344ZM26.5502 108.076C24.3466 108.076 22.5925 106.303 22.5925 104.128C22.5925 101.954 24.3506 100.181 26.5502 100.181C28.7498 100.181 30.5078 101.954 30.5078 104.128C30.5078 106.303 28.7299 108.076 26.5502 108.076ZM26.5502 99.8082C24.3466 99.8082 22.5925 98.0348 22.5925 95.8607C22.5925 93.6867 24.3506 91.9133 26.5502 91.9133C28.7498 91.9133 30.5078 93.6867 30.5078 95.8607C30.5078 98.0348 28.7299 99.8082 26.5502 99.8082ZM34.8394 182.478C32.6557 182.478 30.8817 180.704 30.8817 178.53C30.8817 176.356 32.6597 174.583 34.8394 174.583C37.0191 174.583 38.7971 176.356 38.7971 178.53C38.7971 180.704 37.0191 182.478 34.8394 182.478ZM34.8394 174.21C32.6557 174.21 30.8817 172.437 30.8817 170.263C30.8817 168.089 32.6597 166.315 34.8394 166.315C37.0191 166.315 38.7971 168.089 38.7971 170.263C38.7971 172.437 37.0191 174.21 34.8394 174.21ZM34.8394 165.942C32.6557 165.942 30.8817 164.169 30.8817 161.995C30.8817 159.821 32.6597 158.047 34.8394 158.047C37.0191 158.047 38.7971 159.821 38.7971 161.995C38.7971 164.169 37.0191 165.942 34.8394 165.942ZM34.8394 157.675C32.6557 157.675 30.8817 155.901 30.8817 153.727C30.8817 151.553 32.6597 149.78 34.8394 149.78C37.0191 149.78 38.7971 151.553 38.7971 153.727C38.7971 155.901 37.0191 157.675 34.8394 157.675ZM34.8394 149.407C32.6557 149.407 30.8817 147.633 30.8817 145.459C30.8817 143.285 32.6597 141.512 34.8394 141.512C37.0191 141.512 38.7971 143.285 38.7971 145.459C38.7971 147.633 37.0191 149.407 34.8394 149.407ZM34.8394 141.139C32.6557 141.139 30.8817 139.366 30.8817 137.192C30.8817 135.018 32.6597 133.244 34.8394 133.244C37.0191 133.244 38.7971 135.018 38.7971 137.192C38.7971 139.366 37.0191 141.139 34.8394 141.139ZM34.8394 132.871C32.6557 132.871 30.8817 131.098 30.8817 128.924C30.8817 126.75 32.6597 124.976 34.8394 124.976C37.0191 124.976 38.7971 126.75 38.7971 128.924C38.7971 131.098 37.0191 132.871 34.8394 132.871ZM34.8394 124.603C32.6557 124.603 30.8817 122.83 30.8817 120.656C30.8817 118.482 32.6597 116.709 34.8394 116.709C37.0191 116.709 38.7971 118.482 38.7971 120.656C38.7971 122.83 37.0191 124.603 34.8394 124.603ZM34.8394 116.336C32.6557 116.336 30.8817 114.562 30.8817 112.388C30.8817 110.214 32.6597 108.441 34.8394 108.441C37.0191 108.441 38.7971 110.214 38.7971 112.388C38.7971 114.562 37.0191 116.336 34.8394 116.336ZM34.8394 108.068C32.6557 108.068 30.8817 106.295 30.8817 104.121C30.8817 101.947 32.6597 100.173 34.8394 100.173C37.0191 100.173 38.7971 101.947 38.7971 104.121C38.7971 106.295 37.0191 108.068 34.8394 108.068ZM34.8394 99.8002C32.6557 99.8002 30.8817 98.0269 30.8817 95.8528C30.8817 93.6787 32.6597 91.9054 34.8394 91.9054C37.0191 91.9054 38.7971 93.6787 38.7971 95.8528C38.7971 98.0269 37.0191 99.8002 34.8394 99.8002ZM43.1286 124.603C40.945 124.603 39.171 122.83 39.171 120.656C39.171 118.482 40.9489 116.709 43.1286 116.709C45.3083 116.709 47.0863 118.482 47.0863 120.656C47.0863 122.83 45.3083 124.603 43.1286 124.603ZM43.1286 116.336C40.945 116.336 39.171 114.562 39.171 112.388C39.171 110.214 40.9489 108.441 43.1286 108.441C45.3083 108.441 47.0863 110.214 47.0863 112.388C47.0863 114.562 45.3083 116.336 43.1286 116.336ZM43.1286 108.068C40.945 108.068 39.171 106.295 39.171 104.121C39.171 101.947 40.9489 100.173 43.1286 100.173C45.3083 100.173 47.0863 101.947 47.0863 104.121C47.0863 106.295 45.3083 108.068 43.1286 108.068ZM51.4179 132.685C49.2342 132.685 47.4602 130.911 47.4602 128.737C47.4602 126.563 49.2382 124.79 51.4179 124.79C53.5976 124.79 55.3755 126.563 55.3755 128.737C55.3755 130.911 53.5976 132.685 51.4179 132.685ZM51.4179 124.417C49.2342 124.417 47.4602 122.644 47.4602 120.47C47.4602 118.296 49.2382 116.522 51.4179 116.522C53.5976 116.522 55.3755 118.296 55.3755 120.47C55.3755 122.644 53.5976 124.417 51.4179 124.417ZM51.4179 116.149C49.2342 116.149 47.4602 114.376 47.4602 112.202C47.4602 110.028 49.2382 108.254 51.4179 108.254C53.5976 108.254 55.3755 110.028 55.3755 112.202C55.3755 114.376 53.5976 116.149 51.4179 116.149ZM59.7071 132.685C57.5234 132.685 55.7494 130.911 55.7494 128.737C55.7494 126.563 57.5274 124.79 59.7071 124.79C61.8868 124.79 63.6647 126.563 63.6647 128.737C63.6647 130.911 61.8868 132.685 59.7071 132.685ZM59.7071 124.417C57.5234 124.417 55.7494 122.644 55.7494 120.47C55.7494 118.296 57.5274 116.522 59.7071 116.522C61.8868 116.522 63.6647 118.296 63.6647 120.47C63.6647 122.644 61.8868 124.417 59.7071 124.417ZM59.7071 116.149C57.5234 116.149 55.7494 114.376 55.7494 112.202C55.7494 110.028 57.5274 108.254 59.7071 108.254C61.8868 108.254 63.6647 110.028 63.6647 112.202C63.6647 114.376 61.8868 116.149 59.7071 116.149ZM67.9963 124.231C65.8126 124.231 64.0386 122.457 64.0386 120.283C64.0386 118.109 65.8166 116.336 67.9963 116.336C70.176 116.336 71.954 118.109 71.954 120.283C71.954 122.457 70.176 124.231 67.9963 124.231ZM67.9963 115.963C65.8126 115.963 64.0386 114.189 64.0386 112.015C64.0386 109.841 65.8166 108.068 67.9963 108.068C70.176 108.068 71.954 109.841 71.954 112.015C71.954 114.189 70.176 115.963 67.9963 115.963ZM67.9963 107.695C65.8126 107.695 64.0386 105.922 64.0386 103.748C64.0386 101.574 65.8166 99.8002 67.9963 99.8002C70.176 99.8002 71.954 101.574 71.954 103.748C71.954 105.922 70.176 107.695 67.9963 107.695ZM76.2855 183.612C74.1019 183.612 72.3279 181.839 72.3279 179.665C72.3279 177.491 74.1058 175.718 76.2855 175.718C78.4652 175.718 80.2432 177.471 80.2432 179.665C80.2432 181.859 78.4652 183.612 76.2855 183.612ZM76.2855 175.345C74.1019 175.345 72.3279 173.571 72.3279 171.397C72.3279 169.223 74.1058 167.45 76.2855 167.45C78.4652 167.45 80.2432 169.203 80.2432 171.397C80.2432 173.591 78.4652 175.345 76.2855 175.345ZM76.2855 167.077C74.1019 167.077 72.3279 165.304 72.3279 163.129C72.3279 160.955 74.1058 159.182 76.2855 159.182C78.4652 159.182 80.2432 160.936 80.2432 163.129C80.2432 165.323 78.4652 167.077 76.2855 167.077ZM76.2855 158.809C74.1019 158.809 72.3279 157.036 72.3279 154.862C72.3279 152.688 74.1058 150.914 76.2855 150.914C78.4652 150.914 80.2432 152.668 80.2432 154.862C80.2432 157.056 78.4652 158.809 76.2855 158.809ZM76.2855 150.541C74.1019 150.541 72.3279 148.768 72.3279 146.594C72.3279 144.42 74.1058 142.647 76.2855 142.647C78.4652 142.647 80.2432 144.4 80.2432 146.594C80.2432 148.788 78.4652 150.541 76.2855 150.541ZM76.2855 142.274C74.1019 142.274 72.3279 140.5 72.3279 138.326C72.3279 136.152 74.1058 134.379 76.2855 134.379C78.4652 134.379 80.2432 136.132 80.2432 138.326C80.2432 140.52 78.4652 142.274 76.2855 142.274ZM76.2855 134.006C74.1019 134.006 72.3279 132.233 72.3279 130.058C72.3279 127.884 74.1058 126.111 76.2855 126.111C78.4652 126.111 80.2432 127.865 80.2432 130.058C80.2432 132.252 78.4652 134.006 76.2855 134.006ZM76.2855 125.738C74.1019 125.738 72.3279 123.965 72.3279 121.791C72.3279 119.617 74.1058 117.823 76.2855 117.823C78.4652 117.823 80.2432 119.597 80.2432 121.791C80.2432 123.985 78.4652 125.738 76.2855 125.738ZM76.2855 117.454C74.1019 117.454 72.3279 115.701 72.3279 113.507C72.3279 111.313 74.1058 109.56 76.2855 109.56C78.4652 109.56 80.2432 111.333 80.2432 113.507C80.2432 115.681 78.4652 117.454 76.2855 117.454ZM76.2855 109.187C74.1019 109.187 72.3279 107.433 72.3279 105.239C72.3279 103.045 74.1058 101.292 76.2855 101.292C78.4652 101.292 80.2432 103.065 80.2432 105.239C80.2432 107.413 78.4652 109.187 76.2855 109.187ZM76.2855 100.919C74.1019 100.919 72.3279 99.1655 72.3279 96.9716C72.3279 94.7777 74.1058 93.0242 76.2855 93.0242C78.4652 93.0242 80.2432 94.7975 80.2432 96.9716C80.2432 99.1456 78.4652 100.919 76.2855 100.919ZM84.5748 183.608C82.3911 183.608 80.6171 181.835 80.6171 179.661C80.6171 177.487 82.3951 175.714 84.5748 175.714C86.7545 175.714 88.5324 177.467 88.5324 179.661C88.5324 181.855 86.7545 183.608 84.5748 183.608ZM84.5748 175.341C82.3911 175.341 80.6171 173.567 80.6171 171.393C80.6171 169.219 82.3951 167.446 84.5748 167.446C86.7545 167.446 88.5324 169.199 88.5324 171.393C88.5324 173.587 86.7545 175.341 84.5748 175.341ZM84.5748 167.073C82.3911 167.073 80.6171 165.3 80.6171 163.126C80.6171 160.951 82.3951 159.178 84.5748 159.178C86.7545 159.178 88.5324 160.932 88.5324 163.126C88.5324 165.319 86.7545 167.073 84.5748 167.073ZM84.5748 158.805C82.3911 158.805 80.6171 157.032 80.6171 154.858C80.6171 152.684 82.3951 150.91 84.5748 150.91C86.7545 150.91 88.5324 152.664 88.5324 154.858C88.5324 157.052 86.7545 158.805 84.5748 158.805ZM84.5748 150.537C82.3911 150.537 80.6171 148.764 80.6171 146.59C80.6171 144.416 82.3951 142.643 84.5748 142.643C86.7545 142.643 88.5324 144.396 88.5324 146.59C88.5324 148.784 86.7545 150.537 84.5748 150.537ZM84.5748 142.27C82.3911 142.27 80.6171 140.496 80.6171 138.322C80.6171 136.148 82.3951 134.375 84.5748 134.375C86.7545 134.375 88.5324 136.128 88.5324 138.322C88.5324 140.516 86.7545 142.27 84.5748 142.27ZM84.5748 134.002C82.3911 134.002 80.6171 132.229 80.6171 130.055C80.6171 127.88 82.3951 126.107 84.5748 126.107C86.7545 126.107 88.5324 127.861 88.5324 130.055C88.5324 132.248 86.7545 134.002 84.5748 134.002ZM84.5748 125.734C82.3911 125.734 80.6171 123.961 80.6171 121.787C80.6171 119.613 82.3951 117.819 84.5748 117.819C86.7545 117.819 88.5324 119.593 88.5324 121.787C88.5324 123.981 86.7545 125.734 84.5748 125.734ZM84.5748 117.451C82.3911 117.451 80.6171 115.697 80.6171 113.503C80.6171 111.309 82.3951 109.556 84.5748 109.556C86.7545 109.556 88.5324 111.329 88.5324 113.503C88.5324 115.677 86.7545 117.451 84.5748 117.451ZM84.5748 109.183C82.3911 109.183 80.6171 107.429 80.6171 105.235C80.6171 103.041 82.3951 101.288 84.5748 101.288C86.7545 101.288 88.5324 103.061 88.5324 105.235C88.5324 107.409 86.7545 109.183 84.5748 109.183ZM84.5748 100.915C82.3911 100.915 80.6171 99.1615 80.6171 96.9676C80.6171 94.7737 82.3951 93.0202 84.5748 93.0202C86.7545 93.0202 88.5324 94.7935 88.5324 96.9676C88.5324 99.1417 86.7545 100.915 84.5748 100.915ZM137.894 114.277H124.517L121.558 162.939L132.584 160.817V175.154L93.5441 175.523L95.4693 165.744H109.033L114.546 114.904H100.763V101.101L137.894 103.557V114.277ZM151.103 174.194C148.92 174.194 147.146 172.421 147.146 170.247C147.146 168.073 148.924 166.299 151.103 166.299C153.283 166.299 155.061 168.073 155.061 170.247C155.061 172.421 153.283 174.194 151.103 174.194ZM151.103 165.926C148.92 165.926 147.146 164.153 147.146 161.979C147.146 159.805 148.924 158.032 151.103 158.032C153.283 158.032 155.061 159.805 155.061 161.979C155.061 164.153 153.283 165.926 151.103 165.926ZM151.103 157.659C148.92 157.659 147.146 155.885 147.146 153.711C147.146 151.537 148.924 149.764 151.103 149.764C153.283 149.764 155.061 151.537 155.061 153.711C155.061 155.885 153.283 157.659 151.103 157.659ZM151.103 149.391C148.92 149.391 147.146 147.618 147.146 145.443C147.146 143.269 148.924 141.496 151.103 141.496C153.283 141.496 155.061 143.269 155.061 145.443C155.061 147.618 153.283 149.391 151.103 149.391ZM151.103 141.123C148.92 141.123 147.146 139.35 147.146 137.176C147.146 135.002 148.924 133.228 151.103 133.228C153.283 133.228 155.061 135.002 155.061 137.176C155.061 139.35 153.283 141.123 151.103 141.123ZM151.103 132.855C148.92 132.855 147.146 131.082 147.146 128.908C147.146 126.734 148.924 124.961 151.103 124.961C153.283 124.961 155.061 126.734 155.061 128.908C155.061 131.082 153.283 132.855 151.103 132.855ZM151.103 124.588C148.92 124.588 147.146 122.814 147.146 120.64C147.146 118.466 148.924 116.693 151.103 116.693C153.283 116.693 155.061 118.466 155.061 120.64C155.061 122.814 153.283 124.588 151.103 124.588ZM151.103 116.32C148.92 116.32 147.146 114.547 147.146 112.372C147.146 110.198 148.924 108.425 151.103 108.425C153.283 108.425 155.061 110.198 155.061 112.372C155.061 114.547 153.283 116.32 151.103 116.32ZM151.103 108.052C148.92 108.052 147.146 106.279 147.146 104.105C147.146 101.931 148.924 100.157 151.103 100.157C153.283 100.157 155.061 101.931 155.061 104.105C155.061 106.279 153.283 108.052 151.103 108.052ZM155.431 170.334C155.431 168.156 157.209 166.387 159.389 166.387C161.568 166.387 163.346 168.16 163.346 170.334C163.346 172.508 161.568 174.281 159.389 174.281C157.209 174.281 155.431 172.508 155.431 170.334ZM160.721 182.549C158.537 182.549 156.763 180.796 156.763 178.602C156.763 176.408 158.541 174.654 160.721 174.654C162.901 174.654 164.679 176.428 164.679 178.602C164.679 180.776 162.901 182.549 160.721 182.549ZM163.72 170.334C163.72 168.156 165.498 166.387 167.678 166.387C169.858 166.387 171.635 168.16 171.635 170.334C171.635 172.508 169.858 174.281 167.678 174.281C165.498 174.281 163.72 172.508 163.72 170.334ZM169.01 182.549C166.827 182.549 165.053 180.796 165.053 178.602C165.053 176.408 166.831 174.654 169.01 174.654C171.19 174.654 172.968 176.428 172.968 178.602C172.968 180.776 171.19 182.549 169.01 182.549ZM172.009 170.334C172.009 168.156 173.787 166.387 175.967 166.387C178.147 166.387 179.925 168.16 179.925 170.334C179.925 172.508 178.147 174.281 175.967 174.281C173.787 174.281 172.009 172.508 172.009 170.334ZM177.3 182.549C175.116 182.549 173.342 180.796 173.342 178.602C173.342 176.408 175.12 174.654 177.3 174.654C179.479 174.654 181.257 176.428 181.257 178.602C181.257 180.776 179.479 182.549 177.3 182.549ZM180.299 170.334C180.299 168.156 182.077 166.387 184.256 166.387C186.436 166.387 188.214 168.16 188.214 170.334C188.214 172.508 186.436 174.281 184.256 174.281C182.077 174.281 180.299 172.508 180.299 170.334ZM185.589 182.549C183.405 182.549 181.631 180.796 181.631 178.602C181.631 176.408 183.409 174.654 185.589 174.654C187.768 174.654 189.546 176.428 189.546 178.602C189.546 180.776 187.768 182.549 185.589 182.549ZM192.545 174.281C190.362 174.281 188.588 172.508 188.588 170.334C188.588 168.16 190.366 166.387 192.545 166.387C194.725 166.387 196.503 168.16 196.503 170.334C196.503 172.508 194.725 174.281 192.545 174.281ZM194.856 166.014C192.673 166.014 190.899 164.24 190.899 162.066C190.899 159.892 192.677 158.119 194.856 158.119C197.036 158.119 198.814 159.892 198.814 162.066C198.814 164.24 197.036 166.014 194.856 166.014ZM194.856 157.746C192.673 157.746 190.899 155.973 190.899 153.799C190.899 151.624 192.677 149.851 194.856 149.851C197.036 149.851 198.814 151.624 198.814 153.799C198.814 155.973 197.036 157.746 194.856 157.746ZM211.916 174.186C209.733 174.186 207.959 172.413 207.959 170.239C207.959 169.057 208.495 168.005 209.327 167.287C210.047 166.458 211.105 165.922 212.286 165.922C214.47 165.922 216.244 167.696 216.244 169.87C216.244 171.052 215.707 172.103 214.875 172.841C214.156 173.655 213.098 174.19 211.916 174.19V174.186ZM224.35 178.134C224.35 178.796 224.163 179.427 223.869 179.978C223.296 181.434 221.872 182.45 220.205 182.45C218.022 182.45 216.248 180.677 216.248 178.503C216.248 177.84 216.435 177.209 216.729 176.678C217.302 175.222 218.726 174.186 220.392 174.186H220.205C218.022 174.186 216.248 172.413 216.248 170.239C216.248 169.057 216.785 168.005 217.616 167.287C218.336 166.458 219.394 165.922 220.575 165.922C222.759 165.922 224.533 167.696 224.533 169.87C224.533 171.052 223.996 172.103 223.165 172.841C222.481 173.615 221.498 174.135 220.388 174.19C222.572 174.19 224.346 175.964 224.346 178.138L224.35 178.134ZM228.678 182.081C226.494 182.081 224.72 180.308 224.72 178.134C224.72 175.96 226.498 174.186 228.678 174.186C230.857 174.186 232.635 175.96 232.635 178.134C232.635 180.308 230.857 182.081 228.678 182.081ZM228.865 173.813C226.681 173.813 224.907 172.04 224.907 169.866C224.907 167.692 226.685 165.918 228.865 165.918C231.044 165.918 232.822 167.692 232.822 169.866C232.822 172.04 231.044 173.813 228.865 173.813ZM224.72 104.279C224.72 102.101 226.498 100.332 228.678 100.332C230.857 100.332 232.635 102.105 232.635 104.279C232.635 106.453 230.857 108.227 228.678 108.227C226.498 108.227 224.72 106.453 224.72 104.279ZM228.865 99.9629C226.681 99.9629 224.907 98.1895 224.907 96.0155C224.907 93.8414 226.685 92.068 228.865 92.068C231.044 92.068 232.822 93.8414 232.822 96.0155C232.822 98.1895 231.044 99.9629 228.865 99.9629ZM236.967 182.081C234.783 182.081 233.009 180.308 233.009 178.134C233.009 175.96 234.787 174.186 236.967 174.186C239.147 174.186 240.925 175.96 240.925 178.134C240.925 180.308 239.147 182.081 236.967 182.081ZM237.154 173.813C234.97 173.813 233.196 172.04 233.196 169.866C233.196 167.692 234.974 165.918 237.154 165.918C239.333 165.918 241.111 167.692 241.111 169.866C241.111 172.04 239.333 173.813 237.154 173.813ZM233.009 104.279C233.009 102.101 234.787 100.332 236.967 100.332C239.147 100.332 240.925 102.105 240.925 104.279C240.925 106.453 239.147 108.227 236.967 108.227C234.787 108.227 233.009 106.453 233.009 104.279ZM237.154 99.9629C234.97 99.9629 233.196 98.1895 233.196 96.0155C233.196 93.8414 234.974 92.068 237.154 92.068C239.333 92.068 241.111 93.8414 241.111 96.0155C241.111 98.1895 239.333 99.9629 237.154 99.9629ZM245.443 182.45C243.259 182.45 241.485 180.677 241.485 178.503C241.485 176.329 243.263 174.555 245.443 174.555C247.623 174.555 249.401 176.329 249.401 178.503C249.401 180.677 247.623 182.45 245.443 182.45ZM245.443 174.182C243.259 174.182 241.485 172.409 241.485 170.235C241.485 168.061 243.263 166.287 245.443 166.287C247.623 166.287 249.401 168.061 249.401 170.235C249.401 172.409 247.623 174.182 245.443 174.182ZM245.443 165.914C243.259 165.914 241.485 164.141 241.485 161.967C241.485 159.793 243.263 158.02 245.443 158.02C247.623 158.02 249.401 159.793 249.401 161.967C249.401 164.141 247.623 165.914 245.443 165.914ZM245.443 157.647C243.259 157.647 241.485 155.873 241.485 153.699C241.485 151.525 243.263 149.752 245.443 149.752C247.623 149.752 249.401 151.525 249.401 153.699C249.401 155.873 247.623 157.647 245.443 157.647ZM245.443 149.379C243.259 149.379 241.485 147.606 241.485 145.432C241.485 143.258 243.263 141.484 245.443 141.484C247.623 141.484 249.401 143.258 249.401 145.432C249.401 147.606 247.623 149.379 245.443 149.379ZM245.443 141.111C243.259 141.111 241.485 139.338 241.485 137.164C241.485 134.99 243.263 133.216 245.443 133.216C247.623 133.216 249.401 134.99 249.401 137.164C249.401 139.338 247.623 141.111 245.443 141.111ZM245.443 132.843C243.259 132.843 241.485 131.07 241.485 128.896C241.485 126.722 243.263 124.949 245.443 124.949C247.623 124.949 249.401 126.722 249.401 128.896C249.401 131.07 247.623 132.843 245.443 132.843ZM245.443 124.576C243.259 124.576 241.485 122.802 241.485 120.628C241.485 118.454 243.263 116.681 245.443 116.681C247.623 116.681 249.401 118.454 249.401 120.628C249.401 122.802 247.623 124.576 245.443 124.576ZM245.443 116.308C243.259 116.308 241.485 114.535 241.485 112.361C241.485 110.186 243.263 108.413 245.443 108.413C247.623 108.413 249.401 110.186 249.401 112.361C249.401 114.535 247.623 116.308 245.443 116.308ZM245.443 108.04C243.259 108.04 241.485 106.267 241.485 104.093C241.485 101.919 243.263 100.145 245.443 100.145C247.623 100.145 249.401 101.919 249.401 104.093C249.401 106.267 247.623 108.04 245.443 108.04ZM245.443 99.7725C243.259 99.7725 241.485 97.9991 241.485 95.825C241.485 93.651 243.263 91.8776 245.443 91.8776C247.623 91.8776 249.401 93.651 249.401 95.825C249.401 97.9991 247.623 99.7725 245.443 99.7725ZM253.732 174.178C251.549 174.178 249.775 172.405 249.775 170.231C249.775 168.057 251.553 166.283 253.732 166.283C255.912 166.283 257.69 168.057 257.69 170.231C257.69 172.405 255.912 174.178 253.732 174.178ZM253.732 165.911C251.549 165.911 249.775 164.137 249.775 161.963C249.775 159.789 251.553 158.016 253.732 158.016C255.912 158.016 257.69 159.789 257.69 161.963C257.69 164.137 255.912 165.911 253.732 165.911ZM253.732 157.643C251.549 157.643 249.775 155.869 249.775 153.695C249.775 151.521 251.553 149.748 253.732 149.748C255.912 149.748 257.69 151.521 257.69 153.695C257.69 155.869 255.912 157.643 253.732 157.643ZM253.732 149.375C251.549 149.375 249.775 147.602 249.775 145.428C249.775 143.254 251.553 141.48 253.732 141.48C255.912 141.48 257.69 143.254 257.69 145.428C257.69 147.602 255.912 149.375 253.732 149.375ZM253.732 141.107C251.549 141.107 249.775 139.334 249.775 137.16C249.775 134.986 251.553 133.212 253.732 133.212C255.912 133.212 257.69 134.986 257.69 137.16C257.69 139.334 255.912 141.107 253.732 141.107ZM253.732 132.84C251.549 132.84 249.775 131.066 249.775 128.892C249.775 126.718 251.553 124.945 253.732 124.945C255.912 124.945 257.69 126.718 257.69 128.892C257.69 131.066 255.912 132.84 253.732 132.84ZM253.732 124.572C251.549 124.572 249.775 122.798 249.775 120.624C249.775 118.45 251.553 116.677 253.732 116.677C255.912 116.677 257.69 118.45 257.69 120.624C257.69 122.798 255.912 124.572 253.732 124.572ZM253.732 116.304C251.549 116.304 249.775 114.531 249.775 112.357C249.775 110.183 251.553 108.409 253.732 108.409C255.912 108.409 257.69 110.183 257.69 112.357C257.69 114.531 255.912 116.304 253.732 116.304ZM253.732 108.036C251.549 108.036 249.775 106.263 249.775 104.089C249.775 101.915 251.553 100.141 253.732 100.141C255.912 100.141 257.69 101.915 257.69 104.089C257.69 106.263 255.912 108.036 253.732 108.036Z"
                  fill="#D02127"
                />
              </g>
              <defs>
                <clipPath id="clip0_27_169">
                  <rect width="280" height="236" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </motion.div>
          <div className={styles.mobileSvg1}>
          <svg width="223" height="213" viewBox="0 0 223 213" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="192.463" cy="105.02" r="1.99769" transform="rotate(150 192.463 105.02)" fill="#D9D9D9"/>
<circle cx="152.514" cy="92.5607" r="4.79445" transform="rotate(150 152.514 92.5607)" fill="white"/>
<circle cx="125.753" cy="176.059" r="4.99422" transform="rotate(150 125.753 176.059)" fill="white"/>
<circle cx="146.971" cy="10.6427" r="7.79098" transform="rotate(150 146.971 10.6427)" fill="white"/>
<circle cx="90.9881" cy="120.239" r="2.79676" transform="rotate(150 90.9881 120.239)" fill="white"/>
<circle cx="69.0187" cy="77.7929" r="3.79561" transform="rotate(150 69.0187 77.7929)" fill="white"/>
<circle cx="33.7516" cy="137.369" r="3.79561" transform="rotate(150 33.7516 137.369)" fill="white"/>
</svg>

          </div>
          <div className={styles.rightImg}>
            <svg
              width="433"
              height="364"
              viewBox="0 0 433 364"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="39" cy="83" r="5" fill="#D9D9D9" />
              <circle cx="110" cy="160" r="12" fill="white" />
              <circle cx="272.5" cy="12.5" r="12.5" fill="white" />
              <circle cx="19.5" cy="344.5" r="19.5" fill="white" />
              <circle cx="278" cy="177" r="7" fill="white" />
              <circle cx="272.5" cy="296.5" r="9.5" fill="white" />
              <circle cx="423.5" cy="211.5" r="9.5" fill="white" />
            </svg>
          </div>
        </div>
        <div className={styles.explore}>
          <p>EXPLORE</p>
          <svg
            width="29"
            height="16"
            viewBox="0 0 29 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.724121 1.5305C0.724121 1.29534 0.81709 1.05469 0.997559 0.874219C1.3585 0.513281 1.94912 0.513281 2.31006 0.874219L14.664 13.2281L26.8374 1.05469C27.1983 0.69375 27.789 0.69375 28.1499 1.05469C28.5108 1.41562 28.5108 2.00625 28.1499 2.36719L15.3202 15.2023C14.9593 15.5633 14.3687 15.5633 14.0077 15.2023L0.997559 2.19219C0.811621 2.00625 0.724121 1.77109 0.724121 1.5305Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
