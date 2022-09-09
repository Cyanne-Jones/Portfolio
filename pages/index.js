import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from "../components/Nav.jsx";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cyanne Jones</title>
        <meta name="description" content="Cyanne Jones' Portfolio" />
      </Head>
      <div className={styles.bg}></div>
      <div className={styles.bg2}></div>
      <div className={styles.bg3}></div>
      <Nav />
      <main className={styles.main}>
        <div className={styles.textBox}>
          <h2 className={styles.nameText}>Cyanne Jones</h2>
          <p className={styles.aboutText}>
          I love sunshine, art and problem solving. 
          Programming feels like all three.
          </p>
          <p className={styles.aboutText}>
          {`I’m an artsy Denver-born front-end focused software engineer 
          working in React and Next.js (what this site is built with!)`}.
          </p>
          <p className={styles.aboutText}>
            {`I love working on UI/UX, and really anything that'll give
            me the opportunity to have some creative fun. Feel free to 
            browse through my projects or drop me a line through my 
            contact page!`}
          </p>
        </div>
        <div className={styles.photo}>
        </div>
      </main>
    </div>
  )
}
