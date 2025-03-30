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
            <nav className={styles.navList}>
                {isAuthenticated ?(
                <li className={styles.navList}>
                    <Link to="/cart/:userId">
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                </li>
                ) : (
                <li className={styles.navList}>
                    <Link  to="/catalog">Catalog</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/about">About</Link>
                </li> )
                }
            </nav>
        </header>
    ) 
}