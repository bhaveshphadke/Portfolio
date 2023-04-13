import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.heading}>Contact Me</div>
      <div className={styles.contactList}>
        <Link href='mailto:bhaveshphadke7050@gmail.com'><MdEmail className={styles.emailIcon}/></Link>
        <Link href='https://www.linkedin.com/in/bhavesh-phadke-07a0b3248/'><AiFillLinkedin className={styles.linkedinIcon}/></Link>
        <Link href='https://github.com/bhaveshphadke'><AiFillGithub className={styles.githubIcon}/></Link>
      </div>
    </div>
  )
}

export default Footer