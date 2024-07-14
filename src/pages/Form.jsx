import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import BackButton from "../components/BackButton";
import useUrlPosition from "../hooks/useUrlPosition";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import DatePicker from "react-datepicker";

const convertToEmoji = (countryCode) => {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
};

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

const Form = () => {
  const [lat, lng] = useUrlPosition();
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    if (!lat || !lng) return;
    const fetchCityData = async () => {
      try {
        setIsLoadingGeocoding(true);
        setGeocodingError("");
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        setCountry(data.countryName);
        console.log(data);

        if (!data.countryCode)
          throw new Error(
            "That doesn't seem to be a city. Please click somewhere else."
          );
        setCity(data.city || data.locality || "");
        setDate(new Date());
        setNotes("");
        setEmoji(convertToEmoji(data.countryCode));
      } catch (error) {
        console.log("error fetching city data", error);
        setGeocodingError(error.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    };
    fetchCityData();
  }, [lat, lng]);

  if (isLoadingGeocoding) return <Loader />;

  if (!lat || !lng) {
    toast.error(
      "Please allow geolocation or start by clicking somewhere on the map."
    );
    return null;
  }

  if (geocodingError) {
    toast.error(geocodingError);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    toast.success("Form submitted successfully!");
    // Reset form state
    setCity("");
    setCountry("");
    setDate(new Date());
    setNotes("");
    setEmoji("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label>City Name:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <span className={styles.emoji}>{emoji}</span>
      </div>
      <div className={styles.row}>
        <label>When did you go to {city} ?</label>
        <DatePicker
          startDate={startDate}
          onChange={(date) => setStartDate(date)}
        />
        {/* <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        /> */}
      </div>
      <div className={styles.row}>
        <label>Notes about your trip to {city}</label>
        <textarea
          rows="4"
          cols="50"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>
      <div className={styles.button}>
        <button className={styles.btn}>Add</button>
        <BackButton />
      </div>
    </form>
  );
};

export default Form;
