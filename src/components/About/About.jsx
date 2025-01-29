import {getImageUrl} from "../../utils";
import styles from "./About.module.css";
const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I have 3+ years of experience building dynamic and responsive web applications using Angular, React, and Next.js, ensuring smooth user interactions.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
            <div className={styles.aboutItemText}>
              <h3>Performance & Optimization</h3>
              <p>I apply best practices like lazy loading, efficient state management, and server-side rendering to enhance web performance and user experience.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon"/>
            <div className={styles.aboutItemText}>
              <h3>UI/UX Focused</h3>
              <p>I create clean, modern, and accessible user interfaces while ensuring cross-browser compatibility and responsiveness.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
