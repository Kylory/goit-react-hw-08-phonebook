import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import * as authOperations from "redux/auth/authOperations";
import styles from "./RegisterView.module.css";

export default function RegisterView() {
  const [name, setStateName] = useState("");
  const [email, setStateEmail] = useState("");
  const [password, setStatePassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.registerUser({ name, email, password }));
    setStateName("");
    setStateEmail("");
    setStatePassword("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setStateName(value);
        break;

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
    <>
      <form
        noValidate
        autoComplete="off"
        className={styles.regForm}
        onSubmit={handleSubmit}
      >
        <TextField
          className={styles.name}
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          // id="outlined-basic"
          size="small"
          label="Name"
          variant="outlined"
        />
        <TextField
          className={styles.email}
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          // id="outlined-basic"
          size="small"
          label="Email"
          variant="outlined"
        />
        <TextField
          className={styles.password}
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          // id="outlined-basic"
          size="small"
          label="Password"
          variant="outlined"
        />
        <Button type="submit" size="small" variant="contained">
          Register
        </Button>
      </form>

      {/* <form className={styles} onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" type="text" value={name} onChange={handleChange} />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Register</button>
      </form> */}
    </>
  );
}
