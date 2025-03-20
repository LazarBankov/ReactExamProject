import { Link } from 'react-router';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src="/CvetniDekoraciiLogo.png" alt="Logo" className={styles.logo} />
            </Link>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link to="/catalog">Catalog</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/about">About</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/register">Register</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/login">Login</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/cart/:userId">
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                </li>
            </ul>
        </header>
    ) 
}