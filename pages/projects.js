import Head from "next/head"
import styles from '../styles/Projects.module.css'
const projects = () => {
    return (
        <div className="mainContainer">
            <Head>
                <title>My-Projects</title>
            </Head>
            <h2 className="heading" style={{fontSize:'2rem'}}>My Projects</h2>
            <div className={styles.projectList}>
                <div className={styles.project}>
                    <h2>Resume Builder</h2>
                    <ul>
                        <li>Created a Full stack website for building resume.</li>
                        <li>Used ReactJS for forntend development with Bootstrap. </li>
                        <li>Used MongoDB as a database</li>
                        <li>Provided multiple templates for the user.</li>
                    </ul>
                </div>
                <div className={styles.project}>
                    <h2>Image Extension Converter</h2>
                    <ul>
                        <li>Created a NodeJS application with ExpressJS framework.</li>
                        <li>Used Pure HTML, CSS and JavaScript for froentend development</li>
                        <li>Used MongoDB as a database</li>
                        <li>Used Handlebars which is NodeJS template engine used to serve Html code.</li>
                        <li>Added multiple extensions to choose for the user.</li>
                    </ul>
                </div>
                <div className={styles.project}>
                    <h2>Portfolio Website</h2>
                    <ul>
                        <li>Created a Next.js application for portfolio which describes most about me.</li>
                        <li>Used Pure HTML and CSS for styling the webpages</li>
                        <li>Deployed on vercel at : https://bhaveshphadke.vercel.app</li>
                        <li><a href="https://bhaveshphadke.vercel.app/projects" target="_black">Portfolio Site</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default projects