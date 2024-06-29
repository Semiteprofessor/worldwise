import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
import { useState } from "react";
const AppNav = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  return (
    <div className={styles.appNav}>
      <ul className={styles.tabList}>
        <li
          className={`${styles.tabs} ${getActiveClass(1, styles.activeTabs)}`}
          onClick={() => toggleTab(1)}
        >
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li
          className={`${styles.tabs} ${getActiveClass(2, styles.activeTabs)}`}
          onClick={() => toggleTab(2)}
        >
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AppNav;
