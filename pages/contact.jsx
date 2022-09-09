import Nav from '../components/Nav.jsx';
import Head from 'next/head';
import styles from '../styles/Contact.module.css';

export default function Contact() {

  return(
    <div className={styles.contact}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Cyanne Jones' contact page" />
      </Head>
      <div className={styles.bg}></div>
      <div className={styles.bg2}></div>
      <div className={styles.bg3}></div>
      <Nav />
      <div className={styles.boxContainer}>
        <div className={styles.yellowBox}>
          <h1 className={styles.header}>Contact Me!</h1>
          <p className={styles.contactText}><span className={styles.contactType}>✉️ email:</span> jonescyanne@yahoo.com</p>
          <p className={styles.contactText}><span className={styles.contactType}>📞 phone:</span> 720-725-2247</p>
          <p className={styles.contactText}><span className={styles.contactType}>🐦 carrier pigeon:</span> also acceptable</p>
        </div>
      </div>
    </div>
  )

}