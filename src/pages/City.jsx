// import styles from "./City.module.css";
import PropTypes from "prop-types";
import { useParams, useSearchParams } from "react-router-dom";

// const formatDate = (date) => {
//   const options = { year: "numeric", month: "long", day: "numeric" };
//   return new Intl.DateTimeFormat("en", options).format(new Date(date));
// };
const City = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const { id } = useParams();
  //   const currentCity = {
  //     city: "Rio de Janeiro",
  //     country: "Brazil",
  //     date: "2023-06-28T00:00:00Z",
  //     flag: "🇧🇷",
  //     notes: "My favourite city so far!",
  //   };

  //   const { city, date, notes, flag } = currentCity;

  return (
    <>
      <h1>City {id}</h1>
      <p>
        Position: {lat}, {lng}
      </p>
    </>
    // <div className={styles.city}>
    //   <div className={styles.row}>
    //     <h6>City name</h6>
    //     <h3>
    //       <span>{flag}</span>
    //     </h3>
    //   </div>

    //   <div className={styles.row}>
    //     <h6></h6>
    //   </div>
    // </div>
  );
};

City.propTypes = {
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default City;
