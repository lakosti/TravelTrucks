import icons from "../../assets/img/icons.svg";

import css from "./Location.module.css";

const Location = () => {
  return (
    <>
      <h2 className={css.subtitle}>Location</h2>
      <div className={css.position}>
        <input type="text" placeholder="Enter location" className={css.input} />
        <svg width={20} height={20} className={css.icon}>
          <use href={`${icons}#map`} />
        </svg>
      </div>
    </>
  );
};

export default Location;
