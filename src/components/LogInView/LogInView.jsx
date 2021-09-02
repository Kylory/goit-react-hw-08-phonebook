import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import * as authOperations from "redux/auth/authOperations";

import styles from "./LogInView.module.css";

export default function LogInView() {
  const [email, setStateEmail] = useState("");
  const [password, setStatePassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setStateEmail("");
    setStatePassword("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setStateEmail(value);
        break;

      case "password":
        setStatePassword(value);
        break;

      default:
        break;
    }
  };

  return (
    <form
      className={styles}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        className={styles.email}
        name="email"
        type="email"
        value={email}
        onChange={handleChange}
        size="small"
        label="Name"
        variant="outlined"
      />

      <TextField
        className={styles.password}
        name="password"
        type="password"
        value={password}
        onChange={handleChange}
        size="small"
        label="Password"
        variant="outlined"
      />
      <Button
        className={styles.button}
        type="submit"
        size="small"
        variant="contained"
      >
        Log in
      </Button>
    </form>

    // <form className={styles} onSubmit={handleSubmit}>
    //   <label>
    //     Email
    //     <input
    //       name="email"
    //       type="email"
    //       value={email}
    //       onChange={handleChange}
    //     />
    //   </label>

    //   <label>
    //     Password
    //     <input
    //       name="password"
    //       type="password"
    //       value={password}
    //       onChange={handleChange}
    //     />
    //   </label>

    //   <button type="submit">Log in</button>
    //  </form>
  );
}
