import { authSelectors, authOperations } from "redux/auth";
import { useSelector, useDispatch } from "react-redux";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <div className={styles.UserMenu}>
      <p>Hello, {name}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Log out
      </button>
    </div>
  );
}
