import styles from "./RegisterView.module.css";

export default function RegisterVuew() {
  return (
    <form className={styles}>
      <label>
        Name
        <input
          name="name"
          type="text"
          // value={stateName}
          // onChange={handleChange}
        />
      </label>

      <label>
        Email
        <input
          name="email"
          type="email"
          // value={stateNumber}
          // onChange={handleChange}
        />
      </label>

      <label>
        Password
        <input
          name="password"
          type="password"
          // value={stateNumber}
          // onChange={handleChange}
        />
      </label>

      <button type="submit">Register</button>
    </form>
  );
}
