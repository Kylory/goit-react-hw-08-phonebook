import styles from "./LogInView.module.css";

export default function LogInView() {
  return (
    <form className={styles}>
      <label>
        Login
        <input
          name="name"
          type="text"
          // value={stateName}
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

      <button type="submit">Log in</button>
    </form>
  );
}
