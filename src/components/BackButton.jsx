import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.css";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className={styles.btn}
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </button>
  );
};

export default BackButton;
