import { getImageUrl } from "../../utils"
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"/>
            <a href="mailto:krithikbaghmar@gmail.com" target="_blank">krithikbaghmar@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon"/>
            <a href="https://www.linkedin.com/in/krithik-baghmar/" target="_blank">www.linkedIn.com/krithik-baghmar</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon"/>
            <a href="https://www.github.com/krithik-baghmar" target="_blank">www.github.com/krithik-baghmar</a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact
