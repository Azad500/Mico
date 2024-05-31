'use client'
import React from 'react'
import leftVector from '../../../public/assets/images/leftVector.png';
import Image from 'next/image';
import styles from '@/styles/breadCrumb.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface BreadCrumbProps{
    title: string;
}


const BreadCrumb = ({title}: BreadCrumbProps) => {
  const {back}= useRouter()
  return (
    <div className={styles.breadCrumb}>
          <Link  href={`/`}>
       <Image src={leftVector} width={30} height={30} alt='' onClick={()=>back()}/>
       </Link>
       <h1 className={styles.breadCrumbTitle}>
        {title}
       </h1>
    </div>
  )
}

export default BreadCrumb