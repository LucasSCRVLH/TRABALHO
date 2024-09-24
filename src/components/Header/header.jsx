
import styles from './Header.module.css';

export function Header() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.navItem}>
          <img
            src="https://cdn.icon-icons.com/icons2/272/PNG/512/Contacts_30028.png"
            alt="Contacts Icon"
            className={styles.navIcon}
          />
        </li>
        <li className={styles.navItem}>
          <a href="" className={styles.navLink}>HOME</a>
        </li>
        <li className={styles.navItem}>
          <a href="" className={styles.navLink}>CONTATOS</a>
        </li>
      </ul>
    </nav>
  );
}