import { useState } from "react";
import styles from "./LogInView.module.css";

export default function LogInView() {
  const [stateEmail, setStateEmail] = useState("");
  const [statePassword, setStatePassword] = useState("");
  const [stateCreds, setStateCreds] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const credentials = {
  //     email: stateEmail,
  //     password: statePassword,
  //   };
  //   console.log(credentials);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStateCreds({ email: stateEmail, password: statePassword });

    console.log(stateCreds);
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
    <form className={styles} onSubmit={handleSubmit}>
      <label>
        Email
        <input
          name="email"
          type="email"
          value={stateEmail}
          onChange={handleChange}
        />
      </label>

      <label>
        Password
        <input
          name="password"
          type="password"
          value={statePassword}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Log in</button>
    </form>
  );
}
