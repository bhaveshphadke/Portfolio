import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import Profile from '../public/me.jpg'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className="mainContainer">
      <Head>
        <title>Bhavesh Phadke</title>
      </Head>
      <div className={styles.dataContainer}>
        <div className={styles.leftData}>
          <div>Hello, Welcome to my portfolio website!</div>
          <div> My name is <b> Bhavesh Phadke</b></div>
          <div> Full Stack developer</div>
          <div><button><a href="/bhavesh_phadke_resume.pdf" download>Resume</a></button></div>
        </div>
        <div>
          <Image src={Profile} width={250} height={250} className={styles.profile}/>
          <div className={styles.covering}></div>
        </div>
      </div>
    </div>
  )
}
