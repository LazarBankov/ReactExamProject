import { Link } from 'react-router';
import styles from './Header.module.css';
import  useAuthHook  from '../../hooks/useAuthHook';

export default function Header() {

    const { isAuthenticated } = useAuthHook();
    
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src="/CvetniDekoraciiLogo.png" alt="Logo" className={styles.logo} />
            </Link>
                <li className={styles.navList}>
                <Link className={styles.navItem} to="/catalog">Catalog</Link>
                <Link className={styles.navItem} to="/about">About</Link>
                </li>
            <nav className={styles.navList}>
                {isAuthenticated ?(
                    <li className={styles.navList}>
                    <Link className={styles.navItem} to="/cart/:userId">
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                    <Link className={styles.navItem} to="/logout">Logout</Link>
                </li>
                ) : (
                    <li className={styles.navList}>
                    <Link className={styles.navItem} to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </li> )
                }
            </nav>
        </header>
    ) 
}