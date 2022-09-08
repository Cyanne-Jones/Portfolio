import styles from '../styles/Projects.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Nav from "../components/Nav.jsx";
import projects from "../data/projects"

export default function Project() {

  const mappedProjects = projects.map(project => "hello world!")

  return (
    <div className={styles.container}>
      <Head>
        <title>Cyanne's Projects</title>
        <meta name="description" content="Cyanne Jones' Projects" />
      </Head>
      <div className={styles.bg}></div>
      <div className={styles.bg2}></div>
      <div className={styles.bg3}></div>
      <Nav />
      <h1>Projects!</h1>
      {mappedProjects}
    </div>
  )

}