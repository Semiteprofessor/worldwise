import Sidebar from "../components/Sidebar";
import Map from "./Map";
import styles from "./AppLayout.module.css";
import User from "../Authentication/User";

const AppLayout = () => {
  return (
    <div className={styles.appLayout}>
      <section>
        <Sidebar />
        <Map />
        <User />
      </section>
    </div>
  );
};

export default AppLayout;
