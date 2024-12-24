import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from "../components/Nav.jsx";
import Image from 'next/image.js';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cyanne Jones</title>
        <meta name="description" content="Cyanne Jones's Portfolio" />
      </Head>
      <div className={styles.bg}></div>
      <div className={styles.bg2}></div>
      <div className={styles.bg3}></div>
      <Nav />
      <main className={styles.main}>
        <div className={styles.textBox}>
          <h2 className={styles.nameText}>❀Cyanne Jones❀</h2>
          <p className={styles.aboutText}>
          I love sunshine, art and problem solving. 
          Programming feels like all three.
          </p>
          <p className={styles.aboutText}>
          {`I'm a creative Colorado-based full-stack software developer who loves crafting apps 
          that are not just functional, but are a delight to use. I'm always trying my best to keep my users in mind
          to find fresh and fun ways of solving problems, because building an excellent application starts 
          with the humans who will use it.`}
          </p>
          <p className={styles.aboutText}>
            {`I've been programming for about three years now, and after two amazing years at a SaaS startup, 
            where I got to blend my technical skills with my passion for building tools that help people,
            I'm looking for my next professional dev adventure. I love working with React, Next.js, and Node.js the most right now, and 
            thrive while collaborating with other developers to make something rad together.`}
          </p>
          <p className={styles.aboutText}>
            {`Feel free to browse through my projects, or drop me a line through my contact page, and may all your 
            compile on the first try. 🌱`}
          </p>
        </div>
        <Image 
          src="../public/assets/headShot.png" 
          alt="Cyanne Jones" 
          className={styles.photo}
          height={1000}
          width={1000}
        />
      </main>
    </div>
  )
}
