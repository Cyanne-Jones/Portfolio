import Head from 'next/head';
import Nav from '../components/Nav.jsx';
import projects from '../data/projects';
import styles from '../styles/Projects.module.css';

export default function Project() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Cyanne Jones' Projects" />
      </Head>
      <div className={styles.bg}></div>
      <div className={styles.bg2}></div>
      <div className={styles.bg3}></div>
      <Nav />
      <div className={styles.projectsContainer}>
        {projects.map(project => (
          <div key={project.id} className={styles.slide}>
              <h3 className={styles.projectName}>{project.name}</h3>
              <div className={styles.linksContainer}>
                {project.deployed && <a 
                  className={styles.link} 
                  rel="noreferrer"
                  href={project.deployed} 
                  target="_blank">app link</a>}
                <a className={styles.link} 
                  rel="noreferrer"
                  href={project.repository} 
                  target="_blank">repository</a>
              </div>
              <div className={styles.imgAndTextBox}>
                <img src={project.img} className={styles.img}/>
                <div className={styles.projectText}>
                <p className={styles.projectDescription}>{project.description}</p>
                <p className={styles.builtUsing}>Built using: {project.builtUsing}</p>
                <p className={styles.projectDate}>{project.date}</p>
              </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}