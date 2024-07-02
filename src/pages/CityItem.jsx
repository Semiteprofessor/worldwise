import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import PropTypes from "prop-types";
import { useCities } from "../contextApi/CitiesContext";
// import { v4 as uuidv4 } from "uuid";

const formatDate = (date) => {
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", dateOptions).format(new Date(date));
};

const CityItem = ({ cityName }) => {
  const { currentCity } = useCities();
  const { city, flag, date, coordinates, id } = cityName;
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem-active"] : ""
        }`}
        to={`${id}?lat=${coordinates.lat}&lng=${coordinates.lng}`}
      >
        <div className={styles.group}>
          <span className={styles.name}>{flag}</span>
          <h3 className={styles.name}>{city}</h3>
        </div>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};

CityItem.propTypes = {
  city: PropTypes.string.isRequired,
};

export default CityItem;
