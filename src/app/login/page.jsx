import React from 'react'
import styles from './login.module.css'

const LoginPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper} >
            <div className={styles.socialButton}>Sign in Google </div>
            <div className={styles.socialButton}>Sign in Google </div>
            <div className={styles.socialButton}>Sign in Facebook </div>
        </div>
    </div>
  )
}

export default LoginPage