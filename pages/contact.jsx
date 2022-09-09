import Nav from '../components/Nav.jsx';
import Head from 'next/head';
import styles from '../styles/contact.module.css';

export default function Contact() {

  return(
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Cyanne Jones' contact page" />
      </Head>
      <div className={styles.bg}></div>
      <div className={styles.bg2}></div>
      <div className={styles.bg3}></div>
      <Nav />
      <div>

      </div>
      CONTAX!
    </div>
  )

}