import styles from "./UserMenu.module.css";

export default function UserMenu() {
  return (
    <div className={styles.UserMenu}>
      Hello, user
      <button type="button">Log out</button>
    </div>
  );
}
