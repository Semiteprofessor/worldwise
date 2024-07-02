import styles from "./CountryList.module.css";
import Loader from "../components/Loader";
import Message from "../components/Message";
import CountryItem from "../pages/CountryItem";
import PropTypes from "prop-types";
import { useCities } from "../contextApi/CitiesContext";

const CountryList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Loader />;

  if (!cities.length)
    return <Message message="Add your first city by clicking on the map" />;

  const countries = cities.reduce((acc, city) => {
    if (!acc.map((el) => el.country).includes(city.country))
      return [...acc, { country: city.country, flag: city.flag }];
    else return acc;
  }, []);
  return (
    <div className={styles.countryList}>
      <h1>Country List</h1>
      <ul>
        {countries.map((country) => (
          <CountryItem country={country} key={country.id} />
        ))}
      </ul>
    </div>
  );
};

CountryList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default CountryList;
