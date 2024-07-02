import styles from "./CityList.module.css";
import Loader from "../components/Loader";
import Message from "../components/Message";
import CityItem from "../pages/CityItem";
import PropTypes from "prop-types";
import { useCities } from "../contextApi/CitiesContext";

const CityList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Loader />;

  if (!cities.length)
    return <Message message="Add your first city by clicking on the map" />;
  return (
    <div className={styles.cityList}>
      <h1>City List</h1>
      <ul>
        {cities.map((city) => (
          <CityItem cityName={city} key={city.id} />
        ))}
      </ul>
    </div>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default CityList;
