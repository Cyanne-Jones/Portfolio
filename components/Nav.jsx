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
          <div key={link.title}>
            <Link href={link.path} passHref>
              <a className={router.pathname === link.path ? styles.activeLink : styles.inactiveLink}>
                {link.title}
              </a>
            </Link>
          </div>
        ))}
        <div key="resume">
          <Link href="https://docs.google.com/document/d/e/2PACX-1vSo6eUvL_0an84PG3_uCVgxXtbn9fiGA9Zs22gv7xdSTfSU7FL1qUVjJ5KOL8yUdKBB0qSP4SzEN1H9/pub" passHref>
            <a className={styles.inactiveLink} target="_blank">
              resume
            </a>
          </Link>
        </div>
      </div>
    </div>
  )

};