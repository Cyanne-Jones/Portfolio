import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navLinks = [

  { title: 'about', path: '/' },
  { title: 'projects', path: '/projects' },
  { title: 'contact', path: '/contact' }

]

export default function Nav() {

  const router = useRouter();

  return (
    <div className={styles.navBar}>
      <div className={styles.navList}>
        {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.title}
              className={router.pathname === link.path ? styles.activeLink : styles.inactiveLink}
            >
              {link.title}
            </Link>
        ))}
        <div key="resume" className={styles.link}>
          <Link
            href="https://docs.google.com/document/d/1A2jAYksWm76XVR7vASQAFLCRIIvDEvomY83g36jvoKo/edit?usp=sharing"
            className={styles.inactiveLink}
            target="_blank"
            rel="noreferrer"
          >
            resumé
          </Link>
        </div>
      </div>
    </div>
  )

};