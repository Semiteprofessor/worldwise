import styles from "./City.module.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useCities } from "../contextApi/CitiesContext";
import Loader from "../components/Loader";
import BackButton from "../components/BackButton";

const formatDate = (date) => {
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", dateOptions).format(new Date(date));
};
const City = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const { id } = useParams();

  const { getCity, currentCity } = useCities();

  useEffect(() => {
    getCity(id);
  }, [id, getCity]);

  const { city, date, comment, flag } = currentCity;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{flag}</span> {city}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {city} on</h6>
        {/* <p>{formatDate(date)}</p> */}
      </div>

      {comment && (
        <div className={styles.row}>
          <h6>Your comments</h6>
          <p>{comment}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${city}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {city} on wikipedia &rarr;{" "}
        </a>
      </div>
      <div>
        <BackButton />
      </div>
    </div>
  );
};

City.propTypes = {
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default City;
