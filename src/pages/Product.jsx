import NavBar from "../components/NavBar";
import styles from "./Product.module.css";

const Product = () => {
  return (
    <div className={styles.product}>
      <NavBar />
      <section className={styles.section}>
        <img src="./mushrooms_2.jpg" alt="Image" className={styles.img} />
        <div>
          <h2>About WorldWise.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            elementum ipsum, et aliquet neque. Sed vel lectus vel nisi faucibus
            consectetur. Donec et ligula vel mi tincidunt tristique. Donec
            facilisis elementum felis, vel consectetur justo ultricies ut. Donec
            vel enim id tortor viverra finibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            elementum ipsum, et aliquet neque. Sed vel lectus vel nisi faucibus
            consectetur. Donec et ligula vel mi tincidunt tristique. Donec
            facilisis elementum felis, vel consectetur justo ultricies ut. Donec
            vel enim id tortor viverra finibus.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Product;
