import React from 'react'
import styles from './category.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '../pagination/Pagination'

const CategoryList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Popular Category</h1>
        <div className={styles.categories}>
            
            <Link href={'/blog?cat=style'} className={`${styles.category} ${styles.style}`}>
                <Image src='/style.png' alt='' width={32} height={32} className={styles.image}  />
                Style
            </Link>
            
            <Link href={'/blog'} className={`${styles.category} ${styles.fashion}`}>
                <Image src='/fashion.png' alt='' width={32} height={32} className={styles.image}  />
                Fashion
            </Link>
            <Link href={'/blog?cat=style'} className={`${styles.category} ${styles.food}`}>
                <Image src='/food.png' alt='' width={32} height={32} className={styles.image}  />
                food
            </Link>
            <Link href={'/blog?cat=style'} className={`${styles.category} ${styles.travel}`}>
                <Image src='/style.png' alt='' width={32} height={32} className={styles.image}  />
                Travel
            </Link>
            <Link href={'/blog?cat=style'} className={`${styles.category} ${styles.culture}`}>
                <Image src='/style.png' alt='' width={32} height={32} className={styles.image}  />
                Culture
            </Link>

            <Link href={'/blog?cat=style'} className={`${styles.category} ${styles.coding}`}>
                <Image src='/style.png' alt='' width={32} height={32} className={styles.image}  />
                Coding
            </Link>
        </div>
        
    </div>
  )
}

export default CategoryList