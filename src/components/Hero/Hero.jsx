import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils"

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact}>
        <h1 className={styles.title}>Hi, I'm Krithik Jain</h1>
        <p className={styles.description}>I am a full-stack developer with 5 years of experience using React and NodeJs. Reach out if you'd like to learn more.</p>
        <a href="mailto:krithikbaghmar@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src = {getImageUrl("hero/heroImage.png")} alt="Hero-Image" className={styles.heroImg} />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
