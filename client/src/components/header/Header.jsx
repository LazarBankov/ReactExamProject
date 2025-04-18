import { Link } from "react-router";
import styles from "./Header.module.css";
import useAuthHook from "../../hooks/useAuthHook";

export default function Header() {
  const { isAuthenticated, isAdmin } = useAuthHook();

  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          src="/CvetniDekoraciiLogo.png"
          alt="Logo"
          className={styles.logo}
        />
      </Link>
      <li className={styles.navList}>
        <Link className={styles.navItem} to="/catalog">
          Каталог
        </Link>
      </li>
      <nav className={styles.navList}>
        {isAuthenticated ? (
          <li className={styles.navList}>
            {isAdmin && (
              <Link className={styles.navItem} to="/create">
                Създаване
              </Link>
            )}
            {!isAdmin && (
            <Link className={styles.navItem} to="/cart/:userId">
              <i className="fas fa-shopping-cart"></i>
            </Link>
            )}
            <Link className={styles.navItem} to="/logout">
              Излез от акаунта си
            </Link>
          </li>
        ) : (
          <li className={styles.navList}>
            <Link className={styles.navItem} to="/register">
              Регистрация
            </Link>
            <Link to="/login">Влез в акаунта си</Link>
          </li>
        )}
        <li className={styles.navList}>
          <Link className={styles.navItem} to="/about">
            За нас
          </Link>
        </li>
      </nav>
    </header>
  );
}
