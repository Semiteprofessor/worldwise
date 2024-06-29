import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import NavBar from "../components/NavBar";

const Homepage = () => {
  return (
    <main className={styles.homepage}>
      <NavBar />
      <section>
        <h1>
          You travel to the world. <br /> WorldWise keeps track of your
          adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and you have wandered the
          world.
        </h2>
        <Link to="/app" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
};

export default Homepage;
