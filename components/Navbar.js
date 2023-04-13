import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
    const [ShowNavbar, setShowNavbar] = useState(false);
    const ToggleNavbar = ()=>{
        setShowNavbar(!ShowNavbar)
    }
    return (
        <>
            <nav className={`${ShowNavbar ? styles.navbar : styles.hideNavbar}`}>
                <div className={styles.mainHead}>Bhavesh Phadke</div>
                <div className={styles.links}><Link href='/' onClick={ToggleNavbar}>Home</Link></div>
                <div className={styles.links}><Link href='/about' onClick={ToggleNavbar}>About</Link></div>
                <div className={styles.links}><Link href='/projects' onClick={ToggleNavbar}>Projects</Link></div>
                <div className={styles.links}><Link href='/skills' onClick={ToggleNavbar}>Skills</Link></div>
            </nav>
            <div className={styles.hamMenu} onClick={ToggleNavbar}>
                <div className={`${styles.hamBars} ${ShowNavbar?styles.firstHamBar:""}`}></div>
                <div className={`${styles.hamBars} ${ShowNavbar?styles.secondHamBar:""}`}></div>
                <div className={`${styles.hamBars} ${ShowNavbar?styles.thirdHamBar:""}`}></div>
            </div>

        </>
    )
}

export default Navbar