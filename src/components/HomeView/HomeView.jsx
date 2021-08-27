import { Link } from "react-router-dom";
import styles from "./HomeView.module.css";

export default function HomeView() {
  return (
    <div className={styles.ContactsApp}>
      <h2>Contacts App</h2>
      <p>Main page</p>
      <div>
        <Link to="/register">Register</Link>
        <span> or </span>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
}
