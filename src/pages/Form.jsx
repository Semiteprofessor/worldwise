import styles from "./Form.module.css";
const Form = () => {
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
        <button className={styles.btn}>Back</button>
      </div>
    </form>
  );
};

export default Form;
