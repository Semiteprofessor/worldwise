import Sidebar from "../components/Sidebar";
import Map from "./Map";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
  return (
    <div className={styles.appLayout}>
      <section>
        <Sidebar />
        <Map />
      </section>
    </div>
  );
};

export default AppLayout;
