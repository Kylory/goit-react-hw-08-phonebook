import { useState } from "react";
import { useDispatch } from "react-redux";
import * as authOperations from "redux/auth/authOperations";
import styles from "./RegisterView.module.css";

export default function RegisterVuew() {
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
    // const credentials = {
    //   name: stateName,
    //   email: stateEmail,
    //   password: statePassword,
    // };
    // console.log(credentials);
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
    <form className={styles} onSubmit={handleSubmit}>
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
    </form>
  );
}