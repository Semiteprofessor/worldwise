import styles from "./CountryItem.module.css";
import PropTypes from "prop-types";

// const formatDate = (date) => {
//   const dateOptions = {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   };
//   return new Intl.DateTimeFormat("en-US", dateOptions).format(new Date(date));
// };
const CountryItem = ({ country }) => {
  console.log(country);
  return (
    <li className={styles.countryItem}>
      <div className={styles.group}>
        <span className={styles.name}>{country.flag}</span>
        <h3 className={styles.name}>{country.country}</h3>
      </div>
      {/* <time className={styles.date}>{formatDate(country.date)}</time> */}
    </li>
  );
};

CountryItem.propTypes = {
  country: PropTypes.string.isRequired,
};

export default CountryItem;
