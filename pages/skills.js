import Head from "next/head"
import styles from '../styles/Skills.module.css'
const skills = () => {
    return (
        <div className="mainContainer">
            <Head>
                <title>My-Skills</title>
            </Head>

            <h2 className='heading'>My Skills</h2>
            <div className={styles.skillsContainer}>
                <div className={styles.javascript}>
                    JavaScript - 80%
                </div>
                <div className={styles.html}>
                    HTML - 75%
                </div>
                <div className={styles.css}>
                    CSS - 70%
                </div>
                <div className={styles.reactjs}>
                    ReactJS - 80%
                </div>
                <div className={styles.nodejs}>
                    NodeJS - 85%
                </div>
                <div className={styles.expressjs}>
                    ExpressJS - 85%
                </div>
                <div className={styles.mongodb}>
                    MongoDB - 65%
                </div>
                <div className={styles.bootstrap}>
                    Bootstrap - 60%
                </div>
                <div className={styles.nextjs}>
                    NextJS - 20%
                </div>
            </div>
        </div>
    )
}

export default skills