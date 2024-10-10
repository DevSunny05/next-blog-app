'use client'

import React, { useContext } from 'react'
import styles from './themetoggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '../ThemeContext'

const ThemeToggle = () => {

    const {theme,toggle}=useContext(ThemeContext)
   
  return (
    <div onClick={toggle} className={styles.container} style={theme==="dark"?{backgroundColor:'white'}:{backgroundColor:"#0f172a"}}>
        <Image src="/moon.png" alt="" width={14} height={14}/>
        <div className={styles.ball} style={theme==="dark"?{left:1,backgroundColor:"#0f172a"}:{right:1,backgroundColor:'white'}}></div>
        <Image src="/sun.png" alt="" width={14} height={14}/>

    </div>
  )
}

export default ThemeToggle