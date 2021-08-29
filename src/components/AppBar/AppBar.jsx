import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import styles from "./AppBar.module.css";

export default function AppBar() {
  return (
    <nav className={styles.nav}>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>

      <NavLink
        to="/contacts"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Contacts
      </NavLink>

      <NavLink
        to="/register"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Register
      </NavLink>

      <NavLink
        to="/login"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Log In
      </NavLink>
      <UserMenu />
    </nav>
  );
}
