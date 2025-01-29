import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils"

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Krithik Jain</h1>
        <p className={styles.description}>I am a frontend developer with 3+ years of experience specializing in React and Next.js. Feel free to reach out if you'd like to learn more about my work.</p>
        <a href="mailto:krithikbaghmar@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src = {getImageUrl("hero/heroImage.png")} alt="Hero-Image" className={styles.heroImg} width="450px" height="450px"/>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
