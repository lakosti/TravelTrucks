import { Link } from "react-router-dom";

import css from "./Hero.module.css";

const Home = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.heroBg}>
        <div className={css.inner}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.label}>
            You can find everything you want in our catalog
          </p>
          <Link to="/catalog">
            <button className={css.btn}>View Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
