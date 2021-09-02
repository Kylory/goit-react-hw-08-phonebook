import styles from "./HomeView.module.css";

import { ButtonBase } from "@material-ui/core";

export default function HomeView() {
  return (
    <div className={styles.ContactsApp}>
      <h2>Contacts App</h2>
      <p>Main page</p>
      <ButtonBase color="primary">Hello World</ButtonBase>
    </div>
  );
}
