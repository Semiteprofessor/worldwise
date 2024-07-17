import { useNavigate } from "react-router-dom";
import { useAuth } from "../contextApi/FakeAuthContext";
import styles from "./User.module.css";
import Loader from "../components/Loader";

const User = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  if (!user) return <Loader />;

  const handleClick = () => {
    logout();
    navigate("/");
  };
  return (
    <div className={styles.user}>
      <img src={user.avatar} alt="" className={styles.img} />
      <p>Welcome, {user.name}</p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default User;
