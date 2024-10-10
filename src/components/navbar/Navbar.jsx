import React from 'react'
import style from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themetoggle/ThemeToggle'

const Navbar = () => {
  return (
    <div className={style.container}>
            <div className={style.social}>
                <Image src="/facebook.png" alt="" width={24} height={24}/>
                <Image src="/instagram.png" alt="" width={24} height={24}/>
                <Image src="/tiktok.png" alt="" width={24} height={24}/>
                <Image src="/youtube.png" alt="" width={24} height={24}/>
            </div>
            <div className={style.logo}>
                My Blog
            </div>
            <div className={style.links}>
                <ThemeToggle/>
                <Link href="/" className={style.link}>Home</Link>
                <Link href="/" className={style.link}>Contact</Link>
                <Link href="/" className={style.link}>About</Link>
                <AuthLinks/>
            </div>



    </div>
  )
}

export default Navbar