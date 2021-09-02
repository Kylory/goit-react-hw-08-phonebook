import { authSelectors, authOperations } from "redux/auth";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <div className={styles.UserMenu}>
      <span className={styles.name}>Hello, {name}</span>
      <Button
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
        size="small"
        variant="contained"
      >
        Log out
      </Button>
      {/* <button
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Log out
      </button> */}
    </div>
  );
}
