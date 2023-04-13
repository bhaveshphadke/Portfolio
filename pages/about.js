import Head from "next/head"
import styles from '../styles/About.module.css'
const about = () => {
    return (
        <div className="mainContainer">
            <Head>
                <title>About-Me</title>
            </Head>
            <div className={styles.dataContainer}>
                <h2 className="heading">About Me</h2>
                <p className={styles.paragraph}>
                    Hello and welcome to my portfolio website! My name is <b> Bhavesh Phadke</b> and I am a software developer with skills in<b> HTML, CSS, JavaScript, ReactJS, ExpressJS, NodeJS, and MongoDB.</b>
                </p>

                <p className={styles.paragraph}>

                    I am passionate about coding and problem-solving, and have gained practical experience through various projects I have worked on. I have become proficient in using HTML, CSS, and JavaScript to design and develop responsive web pages that are both visually appealing and functional.
                </p>
                <p className={styles.paragraph}>
                    In addition to front-end development, I have experience using ReactJS to build user interfaces, as well as ExpressJS and NodeJS for backend development. I have also worked with MongoDB, a NoSQL database, to store and retrieve data for my projects.
                </p>
                <p className={styles.paragraph}>
                    I am always looking to improve and expand my skills as a software developer, and am excited about the opportunities to collaborate with other professionals in the field. I am committed to building innovative solutions and delivering high-quality work.
                </p>
                <p className={styles.paragraph}>
                    On this website, you will find information about my skills, experiences, and projects that I have worked on. Please feel free to reach out to me if you have any questions or if you would like to connect.
                </p>
                <p className={styles.paragraph}>
                    Thank you for visiting my website, and I look forward to hearing from you!

                </p>
            </div>
        </div>
    )
}

export default about