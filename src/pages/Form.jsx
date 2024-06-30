import { useState } from "react";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  return (
    <form className={styles.form}>
      <label>City Name:</label>
      <input type="text" name="city" />
      <br />
      <label>Whendid you go to ?</label>
      <input type="email" name="email" />
      <br />
      <label>Notes about your trip to</label>
      <textarea name="message" rows="4" cols="50"></textarea>
      <br />
      <div className={styles.button}>
        <button className={styles.btn}>Add</button>
        <button
          className={styles.btn}
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          &larr; Back
        </button>
      </div>
    </form>
  );
};

export default Form;
