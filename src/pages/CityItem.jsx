import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const formatDate = (date) => {
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", dateOptions).format(new Date(date));
};
const CityItem = ({ cityName }) => {
  const myId = uuidv4();
  const { city, flag, date, coordinates } = cityName;
  return (
    <li>
      <Link
        className={styles.cityItem}
        to={`${myId}?lat=${coordinates.lat}&lng=${coordinates.lng}`}
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
