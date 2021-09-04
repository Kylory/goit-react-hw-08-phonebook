import { authSelectors, authOperations } from "redux/auth";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <div className={styles.UserMenu}>
      <AccountCircleOutlinedIcon />
      <span className={styles.name}>Hello, {name}</span>
      <Button
        className={styles.button}
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
        size="small"
        variant="contained"
      >
        Log out
      </Button>
    </div>
  );
}
