import React from 'react'
import styles from './category.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '../pagination/Pagination'

const getData=async()=>{
    const res=await fetch("http://localhost:3000/api/categories",{
        cache:"no-store"
    })

    if(!res.ok){
        throw new Error("Failed")
    }

    return res.json()
}


const CategoryList = async() => {

    const data =await getData()
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Popular Category</h1>
        <div className={styles.categories}>
            
           {
            data?.map((item)=>(
                <Link key={item._id} href={'/blog?cat=style'} className={`${styles.category} ${styles[item.slug]}`}>
                {item.img &&<Image src={item.img} alt='' width={32} height={32} className={styles.image}  />}
                {item.title}
            </Link>
            ))
           }
           
            
        </div>
        
    </div>
  )
}

export default CategoryList