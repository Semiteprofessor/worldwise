import PropTypes from "prop-types";
import styles from "./Message.module.css";

const Message = ({ message }) => {
  return (
    <p className={styles.message}>
      <span role="img">{message}</span>
    </p>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
