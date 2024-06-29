import { useState } from "react";
import styles from "./Login.module.css";
import NavBar from "../components/NavBar";
const Login = () => {
  const [email, setEmail] = useState("john@gmail.com");
  const [password, setPassword] = useState("password123");

  return (
    <main className={styles.login}>
      <NavBar />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email"> Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
    </main>
  );
};

export default Login;
