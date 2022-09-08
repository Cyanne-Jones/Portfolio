import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';
import Nav from '../components/Nav.jsx';
import projects from '../data/projects';
import styles from '../styles/Projects.module.css';

export default function Project() {

  const SEL = "section";
  const SECTION_SEL = `.${SEL}`;

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
      <ReactFullpage
        licenseKey={"H1KNJ-RBQ08-0HNN7-49P1J-OXTVN"}
        render={() => (
          <ReactFullpage.Wrapper>
              <div className={`${SEL} ${styles.slideContainer}`}>
                {projects.map(project => (
                  <div key={project.id} className={`${styles.slide} slide`}>
                      <h3 className={styles.projectName}>{project.name}</h3>
                      <div className={styles.linksContainer}>
                        <a className={styles.link} href={project.deployed} target="_blank">deployed</a>
                        <a className={styles.link} href={project.repository} target="_blank">repository</a>
                      </div>
                      <div className={styles.imgAndTextBox}>
                        <img src={project.img} className={styles.img}/>
                        <div className={styles.projectText}>
                        <p className={styles.projectDescription}>{project.description}</p>
                        <p>Built using: {project.builtUsing}</p>
                        <p className={styles.projectDate}>{project.date}</p>
                      </div>
                      </div>
                  </div>
                ))}
              </div>
          </ReactFullpage.Wrapper>
        )}
        />
    </div>
  )

}