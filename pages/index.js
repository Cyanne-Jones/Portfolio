import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from "../components/Nav.jsx";

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
            {`After a few exciting years of hands-on experience in the startup world, I'm still as in love as ever with crafting
             tools that help people do their best work. I thrive in collaborative spaces where developers support 
             each other and ship cool tech together, and I always try to bring curiosity, kindness, and a little bit of ✨fun✨ to the table`}
          </p>
          <p className={styles.aboutText}>
            {`Feel free to browse through my projects, or drop me a line through my contact page, and may all your 
            code compile on the first try. 🌱`}
          </p>
        </div>
        <img 
        src="https://i.imgur.com/u6xDM8h.png" 
        alt="Cyanne Jones" 
        className={styles.photo}/>
      </main>
    </div>
  )
}
