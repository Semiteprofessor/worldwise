import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import BackButton from "../components/BackButton";
import useUrlPosition from "../hooks/useUrlPosition";

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

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        setIsLoadingGeocoding(true);
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        setCountry(data.countryName);
        console.log(data);
        setCity(data.city || data.locality || "");
        setDate(new Date());
        setNotes("");
        setEmoji(convertToEmoji(data.countryCode));
      } catch (error) {
        console.log("error fetching city data", error);
      } finally {
        setIsLoadingGeocoding(false);
      }
    };
    fetchCityData();
  }, [lat, lng]);

  return (
    <form className={styles.form}>
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
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <br />
      <label>Notes about your trip to {city}</label>
      <textarea
        rows="4"
        cols="50"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>
      <br />
      <div className={styles.button}>
        <button className={styles.btn}>Add</button>
        <BackButton />
      </div>
    </form>
  );
};

export default Form;
