import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img src="worldwise.png" alt="logo" className={styles.img} />;
      </Link>

      <p>
        <Link to="/">WorldWise</Link>
      </p>
    </div>
  );
};

export default Logo;
